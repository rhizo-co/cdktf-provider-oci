# `goldenGateDeployment` Submodule <a name="`goldenGateDeployment` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDeployment <a name="GoldenGateDeployment" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment oci_golden_gate_deployment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeployment(
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
  cpu_core_count: typing.Union[int, float],
  deployment_type: str,
  display_name: str,
  is_auto_scaling_enabled: typing.Union[bool, IResolvable],
  license_model: str,
  subnet_id: str,
  defined_tags: typing.Mapping[str] = None,
  deployment_backup_id: str = None,
  description: str = None,
  environment_type: str = None,
  fqdn: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  is_public: typing.Union[bool, IResolvable] = None,
  load_balancer_subnet_id: str = None,
  locks: typing.Union[IResolvable, typing.List[GoldenGateDeploymentLocks]] = None,
  maintenance_configuration: GoldenGateDeploymentMaintenanceConfiguration = None,
  maintenance_window: GoldenGateDeploymentMaintenanceWindow = None,
  nsg_ids: typing.List[str] = None,
  ogg_data: GoldenGateDeploymentOggData = None,
  state: str = None,
  timeouts: GoldenGateDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.deploymentType">deployment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.deploymentBackupId">deployment_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.environmentType">environment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.loadBalancerSubnetId">load_balancer_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | maintenance_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.oggData">ogg_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | ogg_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}.

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}.

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.deploymentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}.

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isAutoScalingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}.

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}.

---

##### `deployment_backup_id`<sup>Optional</sup> <a name="deployment_backup_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.deploymentBackupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}.

---

##### `environment_type`<sup>Optional</sup> <a name="environment_type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.environmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.fqdn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isLockOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isPublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}.

---

##### `load_balancer_subnet_id`<sup>Optional</sup> <a name="load_balancer_subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.loadBalancerSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#locks GoldenGateDeployment#locks}

---

##### `maintenance_configuration`<sup>Optional</sup> <a name="maintenance_configuration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.maintenanceConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

maintenance_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_configuration GoldenGateDeployment#maintenance_configuration}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_window GoldenGateDeployment#maintenance_window}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}.

---

##### `ogg_data`<sup>Optional</sup> <a name="ogg_data" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.oggData"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_data GoldenGateDeployment#ogg_data}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#timeouts GoldenGateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration">put_maintenance_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData">put_ogg_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDeploymentBackupId">reset_deployment_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetEnvironmentType">reset_environment_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFqdn">reset_fqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsLockOverride">reset_is_lock_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLoadBalancerSubnetId">reset_load_balancer_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceConfiguration">reset_maintenance_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOggData">reset_ogg_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[GoldenGateDeploymentLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]]

---

##### `put_maintenance_configuration` <a name="put_maintenance_configuration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration"></a>

```python
def put_maintenance_configuration(
  bundle_release_upgrade_period_in_days: typing.Union[int, float] = None,
  interim_release_upgrade_period_in_days: typing.Union[int, float] = None,
  is_interim_release_auto_upgrade_enabled: typing.Union[bool, IResolvable] = None,
  major_release_upgrade_period_in_days: typing.Union[int, float] = None,
  security_patch_upgrade_period_in_days: typing.Union[int, float] = None
) -> None
```

###### `bundle_release_upgrade_period_in_days`<sup>Optional</sup> <a name="bundle_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration.parameter.bundleReleaseUpgradePeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}.

---

###### `interim_release_upgrade_period_in_days`<sup>Optional</sup> <a name="interim_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration.parameter.interimReleaseUpgradePeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}.

---

###### `is_interim_release_auto_upgrade_enabled`<sup>Optional</sup> <a name="is_interim_release_auto_upgrade_enabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration.parameter.isInterimReleaseAutoUpgradeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}.

---

###### `major_release_upgrade_period_in_days`<sup>Optional</sup> <a name="major_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration.parameter.majorReleaseUpgradePeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}.

---

###### `security_patch_upgrade_period_in_days`<sup>Optional</sup> <a name="security_patch_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration.parameter.securityPatchUpgradePeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}.

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day: str,
  start_hour: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow.parameter.day"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}.

---

###### `start_hour`<sup>Required</sup> <a name="start_hour" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow.parameter.startHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}.

---

##### `put_ogg_data` <a name="put_ogg_data" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData"></a>

```python
def put_ogg_data(
  deployment_name: str,
  admin_password: str = None,
  admin_username: str = None,
  certificate: str = None,
  credential_store: str = None,
  group_to_roles_mapping: GoldenGateDeploymentOggDataGroupToRolesMapping = None,
  identity_domain_id: str = None,
  key: str = None,
  ogg_version: str = None,
  password_secret_id: str = None
) -> None
```

###### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.deploymentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}.

---

###### `admin_password`<sup>Optional</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}.

---

###### `admin_username`<sup>Optional</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.adminUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}.

---

###### `certificate`<sup>Optional</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}.

---

###### `credential_store`<sup>Optional</sup> <a name="credential_store" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.credentialStore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}.

---

###### `group_to_roles_mapping`<sup>Optional</sup> <a name="group_to_roles_mapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.groupToRolesMapping"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

group_to_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#group_to_roles_mapping GoldenGateDeployment#group_to_roles_mapping}

---

###### `identity_domain_id`<sup>Optional</sup> <a name="identity_domain_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.identityDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}.

---

###### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}.

---

###### `ogg_version`<sup>Optional</sup> <a name="ogg_version" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.oggVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}.

---

###### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.passwordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_deployment_backup_id` <a name="reset_deployment_backup_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDeploymentBackupId"></a>

```python
def reset_deployment_backup_id() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment_type` <a name="reset_environment_type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetEnvironmentType"></a>

```python
def reset_environment_type() -> None
```

##### `reset_fqdn` <a name="reset_fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFqdn"></a>

```python
def reset_fqdn() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_lock_override` <a name="reset_is_lock_override" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsLockOverride"></a>

```python
def reset_is_lock_override() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_load_balancer_subnet_id` <a name="reset_load_balancer_subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLoadBalancerSubnetId"></a>

```python
def reset_load_balancer_subnet_id() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_maintenance_configuration` <a name="reset_maintenance_configuration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceConfiguration"></a>

```python
def reset_maintenance_configuration() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_ogg_data` <a name="reset_ogg_data" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOggData"></a>

```python
def reset_ogg_data() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoldenGateDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoldenGateDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoldenGateDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoldenGateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentDiagnosticData">deployment_diagnostic_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList">GoldenGateDeploymentDeploymentDiagnosticDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentUrl">deployment_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.ingressIps">ingress_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList">GoldenGateDeploymentIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isHealthy">is_healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLatestVersion">is_latest_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isStorageUtilizationLimitExceeded">is_storage_utilization_limit_exceeded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleSubState">lifecycle_sub_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList">GoldenGateDeploymentLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference">GoldenGateDeploymentMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference">GoldenGateDeploymentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceActionType">next_maintenance_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceDescription">next_maintenance_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggData">ogg_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference">GoldenGateDeploymentOggDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.storageUtilizationInBytes">storage_utilization_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOfNextMaintenance">time_of_next_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOggVersionSupportedUntil">time_ogg_version_supported_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference">GoldenGateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpgradeRequired">time_upgrade_required</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupIdInput">deployment_backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentTypeInput">environment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabledInput">is_auto_scaling_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverrideInput">is_lock_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublicInput">is_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetIdInput">load_balancer_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfigurationInput">maintenance_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggDataInput">ogg_data_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupId">deployment_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentType">environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetId">load_balancer_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `deployment_diagnostic_data`<sup>Required</sup> <a name="deployment_diagnostic_data" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentDiagnosticData"></a>

```python
deployment_diagnostic_data: GoldenGateDeploymentDeploymentDiagnosticDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList">GoldenGateDeploymentDeploymentDiagnosticDataList</a>

---

##### `deployment_url`<sup>Required</sup> <a name="deployment_url" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentUrl"></a>

```python
deployment_url: str
```

- *Type:* str

---

##### `ingress_ips`<sup>Required</sup> <a name="ingress_ips" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.ingressIps"></a>

```python
ingress_ips: GoldenGateDeploymentIngressIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList">GoldenGateDeploymentIngressIpsList</a>

---

##### `is_healthy`<sup>Required</sup> <a name="is_healthy" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isHealthy"></a>

```python
is_healthy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_latest_version`<sup>Required</sup> <a name="is_latest_version" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLatestVersion"></a>

```python
is_latest_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_storage_utilization_limit_exceeded`<sup>Required</sup> <a name="is_storage_utilization_limit_exceeded" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isStorageUtilizationLimitExceeded"></a>

```python
is_storage_utilization_limit_exceeded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_sub_state`<sup>Required</sup> <a name="lifecycle_sub_state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleSubState"></a>

```python
lifecycle_sub_state: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locks"></a>

```python
locks: GoldenGateDeploymentLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList">GoldenGateDeploymentLocksList</a>

---

##### `maintenance_configuration`<sup>Required</sup> <a name="maintenance_configuration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfiguration"></a>

```python
maintenance_configuration: GoldenGateDeploymentMaintenanceConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference">GoldenGateDeploymentMaintenanceConfigurationOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindow"></a>

```python
maintenance_window: GoldenGateDeploymentMaintenanceWindowOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference">GoldenGateDeploymentMaintenanceWindowOutputReference</a>

---

##### `next_maintenance_action_type`<sup>Required</sup> <a name="next_maintenance_action_type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceActionType"></a>

```python
next_maintenance_action_type: str
```

- *Type:* str

---

##### `next_maintenance_description`<sup>Required</sup> <a name="next_maintenance_description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceDescription"></a>

```python
next_maintenance_description: str
```

- *Type:* str

---

##### `ogg_data`<sup>Required</sup> <a name="ogg_data" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggData"></a>

```python
ogg_data: GoldenGateDeploymentOggDataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference">GoldenGateDeploymentOggDataOutputReference</a>

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `storage_utilization_in_bytes`<sup>Required</sup> <a name="storage_utilization_in_bytes" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.storageUtilizationInBytes"></a>

```python
storage_utilization_in_bytes: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_next_maintenance`<sup>Required</sup> <a name="time_of_next_maintenance" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOfNextMaintenance"></a>

```python
time_of_next_maintenance: str
```

- *Type:* str

---

##### `time_ogg_version_supported_until`<sup>Required</sup> <a name="time_ogg_version_supported_until" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOggVersionSupportedUntil"></a>

```python
time_ogg_version_supported_until: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeouts"></a>

```python
timeouts: GoldenGateDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference">GoldenGateDeploymentTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `time_upgrade_required`<sup>Required</sup> <a name="time_upgrade_required" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpgradeRequired"></a>

```python
time_upgrade_required: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_backup_id_input`<sup>Optional</sup> <a name="deployment_backup_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupIdInput"></a>

```python
deployment_backup_id_input: str
```

- *Type:* str

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `environment_type_input`<sup>Optional</sup> <a name="environment_type_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentTypeInput"></a>

```python
environment_type_input: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_auto_scaling_enabled_input`<sup>Optional</sup> <a name="is_auto_scaling_enabled_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabledInput"></a>

```python
is_auto_scaling_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_lock_override_input`<sup>Optional</sup> <a name="is_lock_override_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverrideInput"></a>

```python
is_lock_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublicInput"></a>

```python
is_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `load_balancer_subnet_id_input`<sup>Optional</sup> <a name="load_balancer_subnet_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetIdInput"></a>

```python
load_balancer_subnet_id_input: str
```

- *Type:* str

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[GoldenGateDeploymentLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]]

---

##### `maintenance_configuration_input`<sup>Optional</sup> <a name="maintenance_configuration_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfigurationInput"></a>

```python
maintenance_configuration_input: GoldenGateDeploymentMaintenanceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: GoldenGateDeploymentMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ogg_data_input`<sup>Optional</sup> <a name="ogg_data_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggDataInput"></a>

```python
ogg_data_input: GoldenGateDeploymentOggData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoldenGateDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_backup_id`<sup>Required</sup> <a name="deployment_backup_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupId"></a>

```python
deployment_backup_id: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_type`<sup>Required</sup> <a name="environment_type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `load_balancer_subnet_id`<sup>Required</sup> <a name="load_balancer_subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetId"></a>

```python
load_balancer_subnet_id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDeploymentConfig <a name="GoldenGateDeploymentConfig" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  cpu_core_count: typing.Union[int, float],
  deployment_type: str,
  display_name: str,
  is_auto_scaling_enabled: typing.Union[bool, IResolvable],
  license_model: str,
  subnet_id: str,
  defined_tags: typing.Mapping[str] = None,
  deployment_backup_id: str = None,
  description: str = None,
  environment_type: str = None,
  fqdn: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  is_public: typing.Union[bool, IResolvable] = None,
  load_balancer_subnet_id: str = None,
  locks: typing.Union[IResolvable, typing.List[GoldenGateDeploymentLocks]] = None,
  maintenance_configuration: GoldenGateDeploymentMaintenanceConfiguration = None,
  maintenance_window: GoldenGateDeploymentMaintenanceWindow = None,
  nsg_ids: typing.List[str] = None,
  ogg_data: GoldenGateDeploymentOggData = None,
  state: str = None,
  timeouts: GoldenGateDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentType">deployment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentBackupId">deployment_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.environmentType">environment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.loadBalancerSubnetId">load_balancer_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | maintenance_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.oggData">ogg_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | ogg_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}.

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}.

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}.

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}.

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}.

---

##### `deployment_backup_id`<sup>Optional</sup> <a name="deployment_backup_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentBackupId"></a>

```python
deployment_backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}.

---

##### `environment_type`<sup>Optional</sup> <a name="environment_type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}.

---

##### `load_balancer_subnet_id`<sup>Optional</sup> <a name="load_balancer_subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.loadBalancerSubnetId"></a>

```python
load_balancer_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[GoldenGateDeploymentLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#locks GoldenGateDeployment#locks}

---

##### `maintenance_configuration`<sup>Optional</sup> <a name="maintenance_configuration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceConfiguration"></a>

```python
maintenance_configuration: GoldenGateDeploymentMaintenanceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

maintenance_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_configuration GoldenGateDeployment#maintenance_configuration}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceWindow"></a>

```python
maintenance_window: GoldenGateDeploymentMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_window GoldenGateDeployment#maintenance_window}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}.

---

##### `ogg_data`<sup>Optional</sup> <a name="ogg_data" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.oggData"></a>

```python
ogg_data: GoldenGateDeploymentOggData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_data GoldenGateDeployment#ogg_data}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoldenGateDeploymentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#timeouts GoldenGateDeployment#timeouts}

---

### GoldenGateDeploymentDeploymentDiagnosticData <a name="GoldenGateDeploymentDeploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData()
```


### GoldenGateDeploymentIngressIps <a name="GoldenGateDeploymentIngressIps" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentIngressIps()
```


### GoldenGateDeploymentLocks <a name="GoldenGateDeploymentLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentLocks(
  type: str,
  message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#type GoldenGateDeployment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#message GoldenGateDeployment#message}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#type GoldenGateDeployment#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#message GoldenGateDeployment#message}.

---

### GoldenGateDeploymentMaintenanceConfiguration <a name="GoldenGateDeploymentMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration(
  bundle_release_upgrade_period_in_days: typing.Union[int, float] = None,
  interim_release_upgrade_period_in_days: typing.Union[int, float] = None,
  is_interim_release_auto_upgrade_enabled: typing.Union[bool, IResolvable] = None,
  major_release_upgrade_period_in_days: typing.Union[int, float] = None,
  security_patch_upgrade_period_in_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.bundleReleaseUpgradePeriodInDays">bundle_release_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.interimReleaseUpgradePeriodInDays">interim_release_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.isInterimReleaseAutoUpgradeEnabled">is_interim_release_auto_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.majorReleaseUpgradePeriodInDays">major_release_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.securityPatchUpgradePeriodInDays">security_patch_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}. |

---

##### `bundle_release_upgrade_period_in_days`<sup>Optional</sup> <a name="bundle_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.bundleReleaseUpgradePeriodInDays"></a>

```python
bundle_release_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}.

---

##### `interim_release_upgrade_period_in_days`<sup>Optional</sup> <a name="interim_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.interimReleaseUpgradePeriodInDays"></a>

```python
interim_release_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}.

---

##### `is_interim_release_auto_upgrade_enabled`<sup>Optional</sup> <a name="is_interim_release_auto_upgrade_enabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.isInterimReleaseAutoUpgradeEnabled"></a>

```python
is_interim_release_auto_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}.

---

##### `major_release_upgrade_period_in_days`<sup>Optional</sup> <a name="major_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.majorReleaseUpgradePeriodInDays"></a>

```python
major_release_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}.

---

##### `security_patch_upgrade_period_in_days`<sup>Optional</sup> <a name="security_patch_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.securityPatchUpgradePeriodInDays"></a>

```python
security_patch_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}.

---

### GoldenGateDeploymentMaintenanceWindow <a name="GoldenGateDeploymentMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow(
  day: str,
  start_hour: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.day">day</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}. |

---

##### `day`<sup>Required</sup> <a name="day" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.day"></a>

```python
day: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}.

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}.

---

### GoldenGateDeploymentOggData <a name="GoldenGateDeploymentOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentOggData(
  deployment_name: str,
  admin_password: str = None,
  admin_username: str = None,
  certificate: str = None,
  credential_store: str = None,
  group_to_roles_mapping: GoldenGateDeploymentOggDataGroupToRolesMapping = None,
  identity_domain_id: str = None,
  key: str = None,
  ogg_version: str = None,
  password_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.deploymentName">deployment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.credentialStore">credential_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.groupToRolesMapping">group_to_roles_mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | group_to_roles_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.identityDomainId">identity_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.oggVersion">ogg_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}. |

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}.

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}.

---

##### `admin_username`<sup>Optional</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}.

---

##### `credential_store`<sup>Optional</sup> <a name="credential_store" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.credentialStore"></a>

```python
credential_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}.

---

##### `group_to_roles_mapping`<sup>Optional</sup> <a name="group_to_roles_mapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.groupToRolesMapping"></a>

```python
group_to_roles_mapping: GoldenGateDeploymentOggDataGroupToRolesMapping
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

group_to_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#group_to_roles_mapping GoldenGateDeployment#group_to_roles_mapping}

---

##### `identity_domain_id`<sup>Optional</sup> <a name="identity_domain_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.identityDomainId"></a>

```python
identity_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}.

---

##### `ogg_version`<sup>Optional</sup> <a name="ogg_version" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}.

---

##### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}.

---

### GoldenGateDeploymentOggDataGroupToRolesMapping <a name="GoldenGateDeploymentOggDataGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping(
  security_group_id: str,
  administrator_group_id: str = None,
  operator_group_id: str = None,
  user_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.administratorGroupId">administrator_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.operatorGroupId">operator_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.userGroupId">user_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}. |

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}.

---

##### `administrator_group_id`<sup>Optional</sup> <a name="administrator_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.administratorGroupId"></a>

```python
administrator_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}.

---

##### `operator_group_id`<sup>Optional</sup> <a name="operator_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.operatorGroupId"></a>

```python
operator_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}.

---

##### `user_group_id`<sup>Optional</sup> <a name="user_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.userGroupId"></a>

```python
user_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}.

---

### GoldenGateDeploymentTimeouts <a name="GoldenGateDeploymentTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDeploymentDeploymentDiagnosticDataList <a name="GoldenGateDeploymentDeploymentDiagnosticDataList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoldenGateDeploymentDeploymentDiagnosticDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoldenGateDeploymentDeploymentDiagnosticDataOutputReference <a name="GoldenGateDeploymentDeploymentDiagnosticDataOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.diagnosticState">diagnostic_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd">time_diagnostic_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart">time_diagnostic_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData">GoldenGateDeploymentDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `diagnostic_state`<sup>Required</sup> <a name="diagnostic_state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```python
diagnostic_state: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `time_diagnostic_end`<sup>Required</sup> <a name="time_diagnostic_end" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd"></a>

```python
time_diagnostic_end: str
```

- *Type:* str

---

##### `time_diagnostic_start`<sup>Required</sup> <a name="time_diagnostic_start" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart"></a>

```python
time_diagnostic_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```python
internal_value: GoldenGateDeploymentDeploymentDiagnosticData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData">GoldenGateDeploymentDeploymentDiagnosticData</a>

---


### GoldenGateDeploymentIngressIpsList <a name="GoldenGateDeploymentIngressIpsList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentIngressIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoldenGateDeploymentIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoldenGateDeploymentIngressIpsOutputReference <a name="GoldenGateDeploymentIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.ingressIp">ingress_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps">GoldenGateDeploymentIngressIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_ip`<sup>Required</sup> <a name="ingress_ip" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.ingressIp"></a>

```python
ingress_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.internalValue"></a>

```python
internal_value: GoldenGateDeploymentIngressIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps">GoldenGateDeploymentIngressIps</a>

---


### GoldenGateDeploymentLocksList <a name="GoldenGateDeploymentLocksList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoldenGateDeploymentLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoldenGateDeploymentLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]]

---


### GoldenGateDeploymentLocksOutputReference <a name="GoldenGateDeploymentLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoldenGateDeploymentLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>]

---


### GoldenGateDeploymentMaintenanceConfigurationOutputReference <a name="GoldenGateDeploymentMaintenanceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetBundleReleaseUpgradePeriodInDays">reset_bundle_release_upgrade_period_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetInterimReleaseUpgradePeriodInDays">reset_interim_release_upgrade_period_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetIsInterimReleaseAutoUpgradeEnabled">reset_is_interim_release_auto_upgrade_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetMajorReleaseUpgradePeriodInDays">reset_major_release_upgrade_period_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetSecurityPatchUpgradePeriodInDays">reset_security_patch_upgrade_period_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bundle_release_upgrade_period_in_days` <a name="reset_bundle_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetBundleReleaseUpgradePeriodInDays"></a>

```python
def reset_bundle_release_upgrade_period_in_days() -> None
```

##### `reset_interim_release_upgrade_period_in_days` <a name="reset_interim_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetInterimReleaseUpgradePeriodInDays"></a>

```python
def reset_interim_release_upgrade_period_in_days() -> None
```

##### `reset_is_interim_release_auto_upgrade_enabled` <a name="reset_is_interim_release_auto_upgrade_enabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetIsInterimReleaseAutoUpgradeEnabled"></a>

```python
def reset_is_interim_release_auto_upgrade_enabled() -> None
```

##### `reset_major_release_upgrade_period_in_days` <a name="reset_major_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetMajorReleaseUpgradePeriodInDays"></a>

```python
def reset_major_release_upgrade_period_in_days() -> None
```

##### `reset_security_patch_upgrade_period_in_days` <a name="reset_security_patch_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetSecurityPatchUpgradePeriodInDays"></a>

```python
def reset_security_patch_upgrade_period_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDaysInput">bundle_release_upgrade_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDaysInput">interim_release_upgrade_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput">is_interim_release_auto_upgrade_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDaysInput">major_release_upgrade_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDaysInput">security_patch_upgrade_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays">bundle_release_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays">interim_release_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled">is_interim_release_auto_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays">major_release_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays">security_patch_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_release_upgrade_period_in_days_input`<sup>Optional</sup> <a name="bundle_release_upgrade_period_in_days_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDaysInput"></a>

```python
bundle_release_upgrade_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interim_release_upgrade_period_in_days_input`<sup>Optional</sup> <a name="interim_release_upgrade_period_in_days_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDaysInput"></a>

```python
interim_release_upgrade_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_interim_release_auto_upgrade_enabled_input`<sup>Optional</sup> <a name="is_interim_release_auto_upgrade_enabled_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput"></a>

```python
is_interim_release_auto_upgrade_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `major_release_upgrade_period_in_days_input`<sup>Optional</sup> <a name="major_release_upgrade_period_in_days_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDaysInput"></a>

```python
major_release_upgrade_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_patch_upgrade_period_in_days_input`<sup>Optional</sup> <a name="security_patch_upgrade_period_in_days_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDaysInput"></a>

```python
security_patch_upgrade_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bundle_release_upgrade_period_in_days`<sup>Required</sup> <a name="bundle_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays"></a>

```python
bundle_release_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interim_release_upgrade_period_in_days`<sup>Required</sup> <a name="interim_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays"></a>

```python
interim_release_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_interim_release_auto_upgrade_enabled`<sup>Required</sup> <a name="is_interim_release_auto_upgrade_enabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```python
is_interim_release_auto_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `major_release_upgrade_period_in_days`<sup>Required</sup> <a name="major_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays"></a>

```python
major_release_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_patch_upgrade_period_in_days`<sup>Required</sup> <a name="security_patch_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays"></a>

```python
security_patch_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoldenGateDeploymentMaintenanceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---


### GoldenGateDeploymentMaintenanceWindowOutputReference <a name="GoldenGateDeploymentMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHourInput">start_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `start_hour_input`<sup>Optional</sup> <a name="start_hour_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHourInput"></a>

```python
start_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: GoldenGateDeploymentMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---


### GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference <a name="GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetAdministratorGroupId">reset_administrator_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetOperatorGroupId">reset_operator_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetUserGroupId">reset_user_group_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_administrator_group_id` <a name="reset_administrator_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetAdministratorGroupId"></a>

```python
def reset_administrator_group_id() -> None
```

##### `reset_operator_group_id` <a name="reset_operator_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetOperatorGroupId"></a>

```python
def reset_operator_group_id() -> None
```

##### `reset_user_group_id` <a name="reset_user_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetUserGroupId"></a>

```python
def reset_user_group_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupIdInput">administrator_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupIdInput">operator_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupIdInput">user_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupId">administrator_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupId">operator_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupId">user_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `administrator_group_id_input`<sup>Optional</sup> <a name="administrator_group_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupIdInput"></a>

```python
administrator_group_id_input: str
```

- *Type:* str

---

##### `operator_group_id_input`<sup>Optional</sup> <a name="operator_group_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupIdInput"></a>

```python
operator_group_id_input: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `user_group_id_input`<sup>Optional</sup> <a name="user_group_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupIdInput"></a>

```python
user_group_id_input: str
```

- *Type:* str

---

##### `administrator_group_id`<sup>Required</sup> <a name="administrator_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupId"></a>

```python
administrator_group_id: str
```

- *Type:* str

---

##### `operator_group_id`<sup>Required</sup> <a name="operator_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupId"></a>

```python
operator_group_id: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `user_group_id`<sup>Required</sup> <a name="user_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupId"></a>

```python
user_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.internalValue"></a>

```python
internal_value: GoldenGateDeploymentOggDataGroupToRolesMapping
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---


### GoldenGateDeploymentOggDataOutputReference <a name="GoldenGateDeploymentOggDataOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping">put_group_to_roles_mapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminUsername">reset_admin_username</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCredentialStore">reset_credential_store</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetGroupToRolesMapping">reset_group_to_roles_mapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetIdentityDomainId">reset_identity_domain_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetOggVersion">reset_ogg_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetPasswordSecretId">reset_password_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group_to_roles_mapping` <a name="put_group_to_roles_mapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping"></a>

```python
def put_group_to_roles_mapping(
  security_group_id: str,
  administrator_group_id: str = None,
  operator_group_id: str = None,
  user_group_id: str = None
) -> None
```

###### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}.

---

###### `administrator_group_id`<sup>Optional</sup> <a name="administrator_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping.parameter.administratorGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}.

---

###### `operator_group_id`<sup>Optional</sup> <a name="operator_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping.parameter.operatorGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}.

---

###### `user_group_id`<sup>Optional</sup> <a name="user_group_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping.parameter.userGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}.

---

##### `reset_admin_password` <a name="reset_admin_password" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_username` <a name="reset_admin_username" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminUsername"></a>

```python
def reset_admin_username() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_credential_store` <a name="reset_credential_store" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCredentialStore"></a>

```python
def reset_credential_store() -> None
```

##### `reset_group_to_roles_mapping` <a name="reset_group_to_roles_mapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetGroupToRolesMapping"></a>

```python
def reset_group_to_roles_mapping() -> None
```

##### `reset_identity_domain_id` <a name="reset_identity_domain_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetIdentityDomainId"></a>

```python
def reset_identity_domain_id() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_ogg_version` <a name="reset_ogg_version" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetOggVersion"></a>

```python
def reset_ogg_version() -> None
```

##### `reset_password_secret_id` <a name="reset_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetPasswordSecretId"></a>

```python
def reset_password_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMapping">group_to_roles_mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference">GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStoreInput">credential_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentNameInput">deployment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMappingInput">group_to_roles_mapping_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainIdInput">identity_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersionInput">ogg_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretIdInput">password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStore">credential_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentName">deployment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainId">identity_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersion">ogg_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_to_roles_mapping`<sup>Required</sup> <a name="group_to_roles_mapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMapping"></a>

```python
group_to_roles_mapping: GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference">GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `credential_store_input`<sup>Optional</sup> <a name="credential_store_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStoreInput"></a>

```python
credential_store_input: str
```

- *Type:* str

---

##### `deployment_name_input`<sup>Optional</sup> <a name="deployment_name_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentNameInput"></a>

```python
deployment_name_input: str
```

- *Type:* str

---

##### `group_to_roles_mapping_input`<sup>Optional</sup> <a name="group_to_roles_mapping_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMappingInput"></a>

```python
group_to_roles_mapping_input: GoldenGateDeploymentOggDataGroupToRolesMapping
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---

##### `identity_domain_id_input`<sup>Optional</sup> <a name="identity_domain_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainIdInput"></a>

```python
identity_domain_id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `ogg_version_input`<sup>Optional</sup> <a name="ogg_version_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersionInput"></a>

```python
ogg_version_input: str
```

- *Type:* str

---

##### `password_secret_id_input`<sup>Optional</sup> <a name="password_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretIdInput"></a>

```python
password_secret_id_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `credential_store`<sup>Required</sup> <a name="credential_store" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStore"></a>

```python
credential_store: str
```

- *Type:* str

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

---

##### `identity_domain_id`<sup>Required</sup> <a name="identity_domain_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainId"></a>

```python
identity_domain_id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `ogg_version`<sup>Required</sup> <a name="ogg_version" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.internalValue"></a>

```python
internal_value: GoldenGateDeploymentOggData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---


### GoldenGateDeploymentTimeoutsOutputReference <a name="GoldenGateDeploymentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_deployment

goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoldenGateDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>]

---



