# `ocvpEsxiHost` Submodule <a name="`ocvpEsxiHost` Submodule" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpEsxiHost <a name="OcvpEsxiHost" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host oci_ocvp_esxi_host}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_esxi_host

ocvpEsxiHost.OcvpEsxiHost(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_donor_host_id: str = None,
  capacity_reservation_id: str = None,
  cluster_id: str = None,
  compute_availability_domain: str = None,
  current_sku: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  esxi_software_version: str = None,
  failed_esxi_host_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  host_ocpu_count: typing.Union[int, float] = None,
  host_shape_name: str = None,
  id: str = None,
  next_sku: str = None,
  non_upgraded_esxi_host_id: str = None,
  sddc_id: str = None,
  timeouts: OcvpEsxiHostTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.billingDonorHostId">billing_donor_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.currentSku">current_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.esxiSoftwareVersion">esxi_software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.failedEsxiHostId">failed_esxi_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.hostOcpuCount">host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.hostShapeName">host_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.nextSku">next_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.nonUpgradedEsxiHostId">non_upgraded_esxi_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.sddcId">sddc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_donor_host_id`<sup>Optional</sup> <a name="billing_donor_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.billingDonorHostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}.

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.capacityReservationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}.

---

##### `compute_availability_domain`<sup>Optional</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.computeAvailabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}.

---

##### `current_sku`<sup>Optional</sup> <a name="current_sku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.currentSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}.

---

##### `esxi_software_version`<sup>Optional</sup> <a name="esxi_software_version" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.esxiSoftwareVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}.

---

##### `failed_esxi_host_id`<sup>Optional</sup> <a name="failed_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.failedEsxiHostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}.

---

##### `host_ocpu_count`<sup>Optional</sup> <a name="host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.hostOcpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}.

---

##### `host_shape_name`<sup>Optional</sup> <a name="host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.hostShapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `next_sku`<sup>Optional</sup> <a name="next_sku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.nextSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}.

---

##### `non_upgraded_esxi_host_id`<sup>Optional</sup> <a name="non_upgraded_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.nonUpgradedEsxiHostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}.

---

##### `sddc_id`<sup>Optional</sup> <a name="sddc_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.sddcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#timeouts OcvpEsxiHost#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId">reset_billing_donor_host_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId">reset_capacity_reservation_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain">reset_compute_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku">reset_current_sku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion">reset_esxi_software_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId">reset_failed_esxi_host_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount">reset_host_ocpu_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName">reset_host_shape_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku">reset_next_sku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId">reset_non_upgraded_esxi_host_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId">reset_sddc_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}.

---

##### `reset_billing_donor_host_id` <a name="reset_billing_donor_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId"></a>

```python
def reset_billing_donor_host_id() -> None
```

##### `reset_capacity_reservation_id` <a name="reset_capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId"></a>

```python
def reset_capacity_reservation_id() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_compute_availability_domain` <a name="reset_compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain"></a>

```python
def reset_compute_availability_domain() -> None
```

##### `reset_current_sku` <a name="reset_current_sku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku"></a>

```python
def reset_current_sku() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_esxi_software_version` <a name="reset_esxi_software_version" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion"></a>

```python
def reset_esxi_software_version() -> None
```

##### `reset_failed_esxi_host_id` <a name="reset_failed_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId"></a>

```python
def reset_failed_esxi_host_id() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_host_ocpu_count` <a name="reset_host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount"></a>

```python
def reset_host_ocpu_count() -> None
```

##### `reset_host_shape_name` <a name="reset_host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName"></a>

```python
def reset_host_shape_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_next_sku` <a name="reset_next_sku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku"></a>

```python
def reset_next_sku() -> None
```

##### `reset_non_upgraded_esxi_host_id` <a name="reset_non_upgraded_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId"></a>

```python
def reset_non_upgraded_esxi_host_id() -> None
```

##### `reset_sddc_id` <a name="reset_sddc_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId"></a>

```python
def reset_sddc_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_esxi_host

ocvpEsxiHost.OcvpEsxiHost.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_esxi_host

ocvpEsxiHost.OcvpEsxiHost.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_esxi_host

ocvpEsxiHost.OcvpEsxiHost.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_esxi_host

ocvpEsxiHost.OcvpEsxiHost.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OcvpEsxiHost to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OcvpEsxiHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OcvpEsxiHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate">billing_contract_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId">compute_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment">current_commitment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate">grace_period_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress">is_billing_continuation_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress">is_billing_swapping_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment">next_commitment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId">replacement_esxi_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId">swap_billing_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId">upgraded_replacement_esxi_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion">vmware_software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput">billing_donor_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput">capacity_reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput">compute_availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput">current_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput">esxi_software_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput">failed_esxi_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput">host_ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput">host_shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput">next_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput">non_upgraded_esxi_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput">sddc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId">billing_donor_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku">current_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion">esxi_software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId">failed_esxi_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount">host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName">host_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku">next_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId">non_upgraded_esxi_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId">sddc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_contract_end_date`<sup>Required</sup> <a name="billing_contract_end_date" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate"></a>

```python
billing_contract_end_date: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_instance_id`<sup>Required</sup> <a name="compute_instance_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId"></a>

```python
compute_instance_id: str
```

- *Type:* str

---

##### `current_commitment`<sup>Required</sup> <a name="current_commitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment"></a>

```python
current_commitment: str
```

- *Type:* str

---

##### `grace_period_end_date`<sup>Required</sup> <a name="grace_period_end_date" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate"></a>

```python
grace_period_end_date: str
```

- *Type:* str

---

##### `is_billing_continuation_in_progress`<sup>Required</sup> <a name="is_billing_continuation_in_progress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress"></a>

```python
is_billing_continuation_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_billing_swapping_in_progress`<sup>Required</sup> <a name="is_billing_swapping_in_progress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress"></a>

```python
is_billing_swapping_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `next_commitment`<sup>Required</sup> <a name="next_commitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment"></a>

```python
next_commitment: str
```

- *Type:* str

---

##### `replacement_esxi_host_id`<sup>Required</sup> <a name="replacement_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId"></a>

```python
replacement_esxi_host_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `swap_billing_host_id`<sup>Required</sup> <a name="swap_billing_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId"></a>

```python
swap_billing_host_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts"></a>

```python
timeouts: OcvpEsxiHostTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `upgraded_replacement_esxi_host_id`<sup>Required</sup> <a name="upgraded_replacement_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId"></a>

```python
upgraded_replacement_esxi_host_id: str
```

- *Type:* str

---

##### `vmware_software_version`<sup>Required</sup> <a name="vmware_software_version" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion"></a>

```python
vmware_software_version: str
```

- *Type:* str

---

##### `billing_donor_host_id_input`<sup>Optional</sup> <a name="billing_donor_host_id_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput"></a>

```python
billing_donor_host_id_input: str
```

- *Type:* str

---

##### `capacity_reservation_id_input`<sup>Optional</sup> <a name="capacity_reservation_id_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput"></a>

```python
capacity_reservation_id_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `compute_availability_domain_input`<sup>Optional</sup> <a name="compute_availability_domain_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput"></a>

```python
compute_availability_domain_input: str
```

- *Type:* str

---

##### `current_sku_input`<sup>Optional</sup> <a name="current_sku_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput"></a>

```python
current_sku_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `esxi_software_version_input`<sup>Optional</sup> <a name="esxi_software_version_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput"></a>

```python
esxi_software_version_input: str
```

- *Type:* str

---

##### `failed_esxi_host_id_input`<sup>Optional</sup> <a name="failed_esxi_host_id_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput"></a>

```python
failed_esxi_host_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `host_ocpu_count_input`<sup>Optional</sup> <a name="host_ocpu_count_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput"></a>

```python
host_ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_shape_name_input`<sup>Optional</sup> <a name="host_shape_name_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput"></a>

```python
host_shape_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `next_sku_input`<sup>Optional</sup> <a name="next_sku_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput"></a>

```python
next_sku_input: str
```

- *Type:* str

---

##### `non_upgraded_esxi_host_id_input`<sup>Optional</sup> <a name="non_upgraded_esxi_host_id_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput"></a>

```python
non_upgraded_esxi_host_id_input: str
```

- *Type:* str

---

##### `sddc_id_input`<sup>Optional</sup> <a name="sddc_id_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput"></a>

```python
sddc_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OcvpEsxiHostTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>]

---

##### `billing_donor_host_id`<sup>Required</sup> <a name="billing_donor_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId"></a>

```python
billing_donor_host_id: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compute_availability_domain`<sup>Required</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain"></a>

```python
compute_availability_domain: str
```

- *Type:* str

---

##### `current_sku`<sup>Required</sup> <a name="current_sku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku"></a>

```python
current_sku: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `esxi_software_version`<sup>Required</sup> <a name="esxi_software_version" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion"></a>

```python
esxi_software_version: str
```

- *Type:* str

---

##### `failed_esxi_host_id`<sup>Required</sup> <a name="failed_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId"></a>

```python
failed_esxi_host_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `host_ocpu_count`<sup>Required</sup> <a name="host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount"></a>

```python
host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_shape_name`<sup>Required</sup> <a name="host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName"></a>

```python
host_shape_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `next_sku`<sup>Required</sup> <a name="next_sku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku"></a>

```python
next_sku: str
```

- *Type:* str

---

##### `non_upgraded_esxi_host_id`<sup>Required</sup> <a name="non_upgraded_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId"></a>

```python
non_upgraded_esxi_host_id: str
```

- *Type:* str

---

##### `sddc_id`<sup>Required</sup> <a name="sddc_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId"></a>

```python
sddc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpEsxiHostConfig <a name="OcvpEsxiHostConfig" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_esxi_host

ocvpEsxiHost.OcvpEsxiHostConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_donor_host_id: str = None,
  capacity_reservation_id: str = None,
  cluster_id: str = None,
  compute_availability_domain: str = None,
  current_sku: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  esxi_software_version: str = None,
  failed_esxi_host_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  host_ocpu_count: typing.Union[int, float] = None,
  host_shape_name: str = None,
  id: str = None,
  next_sku: str = None,
  non_upgraded_esxi_host_id: str = None,
  sddc_id: str = None,
  timeouts: OcvpEsxiHostTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId">billing_donor_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku">current_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion">esxi_software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId">failed_esxi_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount">host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName">host_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku">next_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId">non_upgraded_esxi_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId">sddc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_donor_host_id`<sup>Optional</sup> <a name="billing_donor_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId"></a>

```python
billing_donor_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}.

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}.

---

##### `compute_availability_domain`<sup>Optional</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain"></a>

```python
compute_availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}.

---

##### `current_sku`<sup>Optional</sup> <a name="current_sku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku"></a>

```python
current_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}.

---

##### `esxi_software_version`<sup>Optional</sup> <a name="esxi_software_version" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion"></a>

```python
esxi_software_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}.

---

##### `failed_esxi_host_id`<sup>Optional</sup> <a name="failed_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId"></a>

```python
failed_esxi_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}.

---

##### `host_ocpu_count`<sup>Optional</sup> <a name="host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount"></a>

```python
host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}.

---

##### `host_shape_name`<sup>Optional</sup> <a name="host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName"></a>

```python
host_shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `next_sku`<sup>Optional</sup> <a name="next_sku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku"></a>

```python
next_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}.

---

##### `non_upgraded_esxi_host_id`<sup>Optional</sup> <a name="non_upgraded_esxi_host_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId"></a>

```python
non_upgraded_esxi_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}.

---

##### `sddc_id`<sup>Optional</sup> <a name="sddc_id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId"></a>

```python
sddc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts"></a>

```python
timeouts: OcvpEsxiHostTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#timeouts OcvpEsxiHost#timeouts}

---

### OcvpEsxiHostTimeouts <a name="OcvpEsxiHostTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_esxi_host

ocvpEsxiHost.OcvpEsxiHostTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OcvpEsxiHostTimeoutsOutputReference <a name="OcvpEsxiHostTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_esxi_host

ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OcvpEsxiHostTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>]

---


