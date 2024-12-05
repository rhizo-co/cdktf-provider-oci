# `dataOciIdentityDomainsCloudGates` Submodule <a name="`dataOciIdentityDomainsCloudGates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsCloudGates <a name="DataOciIdentityDomainsCloudGates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates oci_identity_domains_cloud_gates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  cloud_gate_count: typing.Union[int, float] = None,
  cloud_gate_filter: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#idcs_endpoint DataOciIdentityDomainsCloudGates#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attributes DataOciIdentityDomainsCloudGates#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attribute_sets DataOciIdentityDomainsCloudGates#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#authorization DataOciIdentityDomainsCloudGates#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.cloudGateCount">cloud_gate_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_count DataOciIdentityDomainsCloudGates#cloud_gate_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.cloudGateFilter">cloud_gate_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_filter DataOciIdentityDomainsCloudGates#cloud_gate_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#compartment_id DataOciIdentityDomainsCloudGates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#id DataOciIdentityDomainsCloudGates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#resource_type_schema_version DataOciIdentityDomainsCloudGates#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_by DataOciIdentityDomainsCloudGates#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_order DataOciIdentityDomainsCloudGates#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#start_index DataOciIdentityDomainsCloudGates#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#idcs_endpoint DataOciIdentityDomainsCloudGates#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attributes DataOciIdentityDomainsCloudGates#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attribute_sets DataOciIdentityDomainsCloudGates#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#authorization DataOciIdentityDomainsCloudGates#authorization}.

---

##### `cloud_gate_count`<sup>Optional</sup> <a name="cloud_gate_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.cloudGateCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_count DataOciIdentityDomainsCloudGates#cloud_gate_count}.

---

##### `cloud_gate_filter`<sup>Optional</sup> <a name="cloud_gate_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.cloudGateFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_filter DataOciIdentityDomainsCloudGates#cloud_gate_filter}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#compartment_id DataOciIdentityDomainsCloudGates#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#id DataOciIdentityDomainsCloudGates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#resource_type_schema_version DataOciIdentityDomainsCloudGates#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_by DataOciIdentityDomainsCloudGates#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_order DataOciIdentityDomainsCloudGates#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#start_index DataOciIdentityDomainsCloudGates#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCloudGateCount">reset_cloud_gate_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCloudGateFilter">reset_cloud_gate_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_cloud_gate_count` <a name="reset_cloud_gate_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCloudGateCount"></a>

```python
def reset_cloud_gate_count() -> None
```

##### `reset_cloud_gate_filter` <a name="reset_cloud_gate_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCloudGateFilter"></a>

```python
def reset_cloud_gate_filter() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsCloudGates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsCloudGates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsCloudGates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsCloudGates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsCloudGates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGates">cloud_gates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList">DataOciIdentityDomainsCloudGatesCloudGatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateCountInput">cloud_gate_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateFilterInput">cloud_gate_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateCount">cloud_gate_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateFilter">cloud_gate_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cloud_gates`<sup>Required</sup> <a name="cloud_gates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGates"></a>

```python
cloud_gates: DataOciIdentityDomainsCloudGatesCloudGatesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList">DataOciIdentityDomainsCloudGatesCloudGatesList</a>

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `cloud_gate_count_input`<sup>Optional</sup> <a name="cloud_gate_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateCountInput"></a>

```python
cloud_gate_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_gate_filter_input`<sup>Optional</sup> <a name="cloud_gate_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateFilterInput"></a>

```python
cloud_gate_filter_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `cloud_gate_count`<sup>Required</sup> <a name="cloud_gate_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateCount"></a>

```python
cloud_gate_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_gate_filter`<sup>Required</sup> <a name="cloud_gate_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateFilter"></a>

```python
cloud_gate_filter: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsCloudGatesCloudGates <a name="DataOciIdentityDomainsCloudGatesCloudGates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates()
```


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy()
```


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy()
```


### DataOciIdentityDomainsCloudGatesCloudGatesMappings <a name="DataOciIdentityDomainsCloudGatesCloudGatesMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings()
```


### DataOciIdentityDomainsCloudGatesCloudGatesMeta <a name="DataOciIdentityDomainsCloudGatesCloudGatesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta()
```


### DataOciIdentityDomainsCloudGatesCloudGatesOauthClient <a name="DataOciIdentityDomainsCloudGatesCloudGatesOauthClient" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient()
```


### DataOciIdentityDomainsCloudGatesCloudGatesServers <a name="DataOciIdentityDomainsCloudGatesCloudGatesServers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers()
```


### DataOciIdentityDomainsCloudGatesCloudGatesTags <a name="DataOciIdentityDomainsCloudGatesCloudGatesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags()
```


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups()
```


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers()
```


### DataOciIdentityDomainsCloudGatesConfig <a name="DataOciIdentityDomainsCloudGatesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  cloud_gate_count: typing.Union[int, float] = None,
  cloud_gate_filter: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#idcs_endpoint DataOciIdentityDomainsCloudGates#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attributes DataOciIdentityDomainsCloudGates#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attribute_sets DataOciIdentityDomainsCloudGates#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#authorization DataOciIdentityDomainsCloudGates#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.cloudGateCount">cloud_gate_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_count DataOciIdentityDomainsCloudGates#cloud_gate_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.cloudGateFilter">cloud_gate_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_filter DataOciIdentityDomainsCloudGates#cloud_gate_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#compartment_id DataOciIdentityDomainsCloudGates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#id DataOciIdentityDomainsCloudGates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#resource_type_schema_version DataOciIdentityDomainsCloudGates#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_by DataOciIdentityDomainsCloudGates#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_order DataOciIdentityDomainsCloudGates#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#start_index DataOciIdentityDomainsCloudGates#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#idcs_endpoint DataOciIdentityDomainsCloudGates#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attributes DataOciIdentityDomainsCloudGates#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attribute_sets DataOciIdentityDomainsCloudGates#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#authorization DataOciIdentityDomainsCloudGates#authorization}.

---

##### `cloud_gate_count`<sup>Optional</sup> <a name="cloud_gate_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.cloudGateCount"></a>

```python
cloud_gate_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_count DataOciIdentityDomainsCloudGates#cloud_gate_count}.

---

##### `cloud_gate_filter`<sup>Optional</sup> <a name="cloud_gate_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.cloudGateFilter"></a>

```python
cloud_gate_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_filter DataOciIdentityDomainsCloudGates#cloud_gate_filter}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#compartment_id DataOciIdentityDomainsCloudGates#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#id DataOciIdentityDomainsCloudGates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#resource_type_schema_version DataOciIdentityDomainsCloudGates#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_by DataOciIdentityDomainsCloudGates#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_order DataOciIdentityDomainsCloudGates#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#start_index DataOciIdentityDomainsCloudGates#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy">DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy">DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy">DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy">DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesList <a name="DataOciIdentityDomainsCloudGatesCloudGatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesMappingsList <a name="DataOciIdentityDomainsCloudGatesCloudGatesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.mappingId">mapping_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.nginxSettings">nginx_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.proxyPass">proxy_pass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.resourcePrefix">resource_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.upstreamServerGroupId">upstream_server_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings">DataOciIdentityDomainsCloudGatesCloudGatesMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `mapping_id`<sup>Required</sup> <a name="mapping_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.mappingId"></a>

```python
mapping_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nginx_settings`<sup>Required</sup> <a name="nginx_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.nginxSettings"></a>

```python
nginx_settings: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `proxy_pass`<sup>Required</sup> <a name="proxy_pass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.proxyPass"></a>

```python
proxy_pass: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `resource_prefix`<sup>Required</sup> <a name="resource_prefix" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.resourcePrefix"></a>

```python
resource_prefix: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `upstream_server_group_id`<sup>Required</sup> <a name="upstream_server_group_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.upstreamServerGroupId"></a>

```python
upstream_server_group_id: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGatesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings">DataOciIdentityDomainsCloudGatesCloudGatesMappings</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesMetaList <a name="DataOciIdentityDomainsCloudGatesCloudGatesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta">DataOciIdentityDomainsCloudGatesCloudGatesMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGatesMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta">DataOciIdentityDomainsCloudGatesCloudGatesMeta</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList <a name="DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient">DataOciIdentityDomainsCloudGatesCloudGatesOauthClient</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGatesOauthClient
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient">DataOciIdentityDomainsCloudGatesCloudGatesOauthClient</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList">DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList">DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.isOpcService">is_opc_service</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.mappings">mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList">DataOciIdentityDomainsCloudGatesCloudGatesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList">DataOciIdentityDomainsCloudGatesCloudGatesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.oauthClient">oauth_client</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList">DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.servers">servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList">DataOciIdentityDomainsCloudGatesCloudGatesServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList">DataOciIdentityDomainsCloudGatesCloudGatesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.upstreamServerGroups">upstream_server_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.upstreamServers">upstream_servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates">DataOciIdentityDomainsCloudGatesCloudGates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList">DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList">DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_opc_service`<sup>Required</sup> <a name="is_opc_service" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.isOpcService"></a>

```python
is_opc_service: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.mappings"></a>

```python
mappings: DataOciIdentityDomainsCloudGatesCloudGatesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList">DataOciIdentityDomainsCloudGatesCloudGatesMappingsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsCloudGatesCloudGatesMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList">DataOciIdentityDomainsCloudGatesCloudGatesMetaList</a>

---

##### `oauth_client`<sup>Required</sup> <a name="oauth_client" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.oauthClient"></a>

```python
oauth_client: DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList">DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.servers"></a>

```python
servers: DataOciIdentityDomainsCloudGatesCloudGatesServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList">DataOciIdentityDomainsCloudGatesCloudGatesServersList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsCloudGatesCloudGatesTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList">DataOciIdentityDomainsCloudGatesCloudGatesTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `upstream_server_groups`<sup>Required</sup> <a name="upstream_server_groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.upstreamServerGroups"></a>

```python
upstream_server_groups: DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList</a>

---

##### `upstream_servers`<sup>Required</sup> <a name="upstream_servers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.upstreamServers"></a>

```python
upstream_servers: DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGates
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates">DataOciIdentityDomainsCloudGatesCloudGates</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesServersList <a name="DataOciIdentityDomainsCloudGatesCloudGatesServersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.nginxSettings">nginx_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.ssl">ssl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers">DataOciIdentityDomainsCloudGatesCloudGatesServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `nginx_settings`<sup>Required</sup> <a name="nginx_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.nginxSettings"></a>

```python
nginx_settings: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.ssl"></a>

```python
ssl: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGatesServers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers">DataOciIdentityDomainsCloudGatesCloudGatesServers</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesTagsList <a name="DataOciIdentityDomainsCloudGatesCloudGatesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags">DataOciIdentityDomainsCloudGatesCloudGatesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGatesTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags">DataOciIdentityDomainsCloudGatesCloudGatesTags</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.nginxSettings">nginx_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.ssl">ssl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `nginx_settings`<sup>Required</sup> <a name="nginx_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.nginxSettings"></a>

```python
nginx_settings: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.ssl"></a>

```python
ssl: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_cloud_gates

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.nginxSettings">nginx_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `nginx_settings`<sup>Required</sup> <a name="nginx_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.nginxSettings"></a>

```python
nginx_settings: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers</a>

---



