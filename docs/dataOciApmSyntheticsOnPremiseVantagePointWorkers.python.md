# `dataOciApmSyntheticsOnPremiseVantagePointWorkers` Submodule <a name="`dataOciApmSyntheticsOnPremiseVantagePointWorkers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsOnPremiseVantagePointWorkers <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers oci_apm_synthetics_on_premise_vantage_point_workers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  on_premise_vantage_point_id: str,
  capability: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter]] = None,
  id: str = None,
  name: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.capability">capability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#capability DataOciApmSyntheticsOnPremiseVantagePointWorkers#capability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#display_name DataOciApmSyntheticsOnPremiseVantagePointWorkers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#id DataOciApmSyntheticsOnPremiseVantagePointWorkers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#name DataOciApmSyntheticsOnPremiseVantagePointWorkers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#status DataOciApmSyntheticsOnPremiseVantagePointWorkers#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#apm_domain_id}.

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.onPremiseVantagePointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#on_premise_vantage_point_id}.

---

##### `capability`<sup>Optional</sup> <a name="capability" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.capability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#capability DataOciApmSyntheticsOnPremiseVantagePointWorkers#capability}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#display_name DataOciApmSyntheticsOnPremiseVantagePointWorkers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#filter DataOciApmSyntheticsOnPremiseVantagePointWorkers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#id DataOciApmSyntheticsOnPremiseVantagePointWorkers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#name DataOciApmSyntheticsOnPremiseVantagePointWorkers#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#status DataOciApmSyntheticsOnPremiseVantagePointWorkers#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetCapability">reset_capability</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]]

---

##### `reset_capability` <a name="reset_capability" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetCapability"></a>

```python
def reset_capability() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePointWorkers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePointWorkers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmSyntheticsOnPremiseVantagePointWorkers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmSyntheticsOnPremiseVantagePointWorkers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsOnPremiseVantagePointWorkers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.workerCollection">worker_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.capabilityInput">capability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.onPremiseVantagePointIdInput">on_premise_vantage_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.capability">capability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.filter"></a>

```python
filter: DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList</a>

---

##### `worker_collection`<sup>Required</sup> <a name="worker_collection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.workerCollection"></a>

```python
worker_collection: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `capability_input`<sup>Optional</sup> <a name="capability_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.capabilityInput"></a>

```python
capability_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_premise_vantage_point_id_input`<sup>Optional</sup> <a name="on_premise_vantage_point_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.onPremiseVantagePointIdInput"></a>

```python
on_premise_vantage_point_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `capability`<sup>Required</sup> <a name="capability" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.capability"></a>

```python
capability: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.onPremiseVantagePointId"></a>

```python
on_premise_vantage_point_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  on_premise_vantage_point_id: str,
  capability: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter]] = None,
  id: str = None,
  name: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.capability">capability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#capability DataOciApmSyntheticsOnPremiseVantagePointWorkers#capability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#display_name DataOciApmSyntheticsOnPremiseVantagePointWorkers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#id DataOciApmSyntheticsOnPremiseVantagePointWorkers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#name DataOciApmSyntheticsOnPremiseVantagePointWorkers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#status DataOciApmSyntheticsOnPremiseVantagePointWorkers#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#apm_domain_id}.

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.onPremiseVantagePointId"></a>

```python
on_premise_vantage_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorkers#on_premise_vantage_point_id}.

---

##### `capability`<sup>Optional</sup> <a name="capability" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.capability"></a>

```python
capability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#capability DataOciApmSyntheticsOnPremiseVantagePointWorkers#capability}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#display_name DataOciApmSyntheticsOnPremiseVantagePointWorkers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#filter DataOciApmSyntheticsOnPremiseVantagePointWorkers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#id DataOciApmSyntheticsOnPremiseVantagePointWorkers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#name DataOciApmSyntheticsOnPremiseVantagePointWorkers#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#status DataOciApmSyntheticsOnPremiseVantagePointWorkers#status}.

---

### DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#name DataOciApmSyntheticsOnPremiseVantagePointWorkers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#values DataOciApmSyntheticsOnPremiseVantagePointWorkers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#regex DataOciApmSyntheticsOnPremiseVantagePointWorkers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#name DataOciApmSyntheticsOnPremiseVantagePointWorkers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#values DataOciApmSyntheticsOnPremiseVantagePointWorkers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_workers#regex DataOciApmSyntheticsOnPremiseVantagePointWorkers#regex}.

---

### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection()
```


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems()
```


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo()
```


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct()
```


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]]

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter">DataOciApmSyntheticsOnPremiseVantagePointWorkersFilter</a>]

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.apmShortId">apm_short_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.collectorEndPoint">collector_end_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apm_short_id`<sup>Required</sup> <a name="apm_short_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.apmShortId"></a>

```python
apm_short_id: str
```

- *Type:* str

---

##### `collector_end_point`<sup>Required</sup> <a name="collector_end_point" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.collectorEndPoint"></a>

```python
collector_end_point: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfo</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.isRunNow">is_run_now</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.monitorType">monitor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.timeAssigned">time_assigned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_run_now`<sup>Required</sup> <a name="is_run_now" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.isRunNow"></a>

```python
is_run_now: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

---

##### `time_assigned`<sup>Required</sup> <a name="time_assigned" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.timeAssigned"></a>

```python
time_assigned: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStruct</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.configurationDetails">configuration_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.geoInfo">geo_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.identityInfo">identity_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.monitorList">monitor_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.opvpId">opvp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.opvpName">opvp_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.resourcePrincipalTokenPublicKey">resource_principal_token_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.runtimeId">runtime_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.timeLastSyncUp">time_last_sync_up</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.versionDetails">version_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `configuration_details`<sup>Required</sup> <a name="configuration_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.configurationDetails"></a>

```python
configuration_details: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `geo_info`<sup>Required</sup> <a name="geo_info" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.geoInfo"></a>

```python
geo_info: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_info`<sup>Required</sup> <a name="identity_info" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.identityInfo"></a>

```python
identity_info: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsIdentityInfoList</a>

---

##### `monitor_list`<sup>Required</sup> <a name="monitor_list" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.monitorList"></a>

```python
monitor_list: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsMonitorListStructList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.onPremiseVantagePointId"></a>

```python
on_premise_vantage_point_id: str
```

- *Type:* str

---

##### `opvp_id`<sup>Required</sup> <a name="opvp_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.opvpId"></a>

```python
opvp_id: str
```

- *Type:* str

---

##### `opvp_name`<sup>Required</sup> <a name="opvp_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.opvpName"></a>

```python
opvp_name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_principal_token_public_key`<sup>Required</sup> <a name="resource_principal_token_public_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.resourcePrincipalTokenPublicKey"></a>

```python
resource_principal_token_public_key: str
```

- *Type:* str

---

##### `runtime_id`<sup>Required</sup> <a name="runtime_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.runtimeId"></a>

```python
runtime_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_sync_up`<sup>Required</sup> <a name="time_last_sync_up" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.timeLastSyncUp"></a>

```python
time_last_sync_up: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `version_details`<sup>Required</sup> <a name="version_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.versionDetails"></a>

```python
version_details: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList</a>

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItems</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.latestVersion">latest_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.minSupportedVersion">min_supported_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.latestVersion"></a>

```python
latest_version: str
```

- *Type:* str

---

##### `min_supported_version`<sup>Required</sup> <a name="min_supported_version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.minSupportedVersion"></a>

```python
min_supported_version: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsVersionDetails</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_workers

dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.property.items"></a>

```python
items: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorkers.DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection">DataOciApmSyntheticsOnPremiseVantagePointWorkersWorkerCollection</a>

---



