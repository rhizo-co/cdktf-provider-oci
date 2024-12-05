# `databaseAutonomousContainerDatabaseDataguardAssociation` Submodule <a name="`databaseAutonomousContainerDatabaseDataguardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociation <a name="DatabaseAutonomousContainerDatabaseDataguardAssociation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association oci_database_autonomous_container_database_dataguard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_container_database_id: str,
  peer_autonomous_container_database_display_name: str,
  protection_mode: str,
  autonomous_container_database_dataguard_association_id: str = None,
  fast_start_fail_over_lag_limit_in_seconds: typing.Union[int, float] = None,
  id: str = None,
  is_automatic_failover_enabled: typing.Union[bool, IResolvable] = None,
  peer_autonomous_container_database_backup_config: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig = None,
  peer_autonomous_container_database_compartment_id: str = None,
  peer_autonomous_vm_cluster_id: str = None,
  peer_cloud_autonomous_vm_cluster_id: str = None,
  peer_db_unique_name: str = None,
  standby_maintenance_buffer_in_days: typing.Union[int, float] = None,
  timeouts: DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerAutonomousContainerDatabaseDisplayName">peer_autonomous_container_database_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.protectionMode">protection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#protection_mode DatabaseAutonomousContainerDatabaseDataguardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.autonomousContainerDatabaseDataguardAssociationId">autonomous_container_database_dataguard_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.fastStartFailOverLagLimitInSeconds">fast_start_fail_over_lag_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseDataguardAssociation#fast_start_fail_over_lag_limit_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.isAutomaticFailoverEnabled">is_automatic_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_automatic_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerAutonomousContainerDatabaseBackupConfig">peer_autonomous_container_database_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | peer_autonomous_container_database_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerAutonomousContainerDatabaseCompartmentId">peer_autonomous_container_database_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerAutonomousVmClusterId">peer_autonomous_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerCloudAutonomousVmClusterId">peer_cloud_autonomous_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerDbUniqueName">peer_db_unique_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_db_unique_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.standbyMaintenanceBufferInDays">standby_maintenance_buffer_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#standby_maintenance_buffer_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.autonomousContainerDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}.

---

##### `peer_autonomous_container_database_display_name`<sup>Required</sup> <a name="peer_autonomous_container_database_display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerAutonomousContainerDatabaseDisplayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_display_name}.

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.protectionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#protection_mode DatabaseAutonomousContainerDatabaseDataguardAssociation#protection_mode}.

---

##### `autonomous_container_database_dataguard_association_id`<sup>Optional</sup> <a name="autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.autonomousContainerDatabaseDataguardAssociationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}.

---

##### `fast_start_fail_over_lag_limit_in_seconds`<sup>Optional</sup> <a name="fast_start_fail_over_lag_limit_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.fastStartFailOverLagLimitInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseDataguardAssociation#fast_start_fail_over_lag_limit_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_automatic_failover_enabled`<sup>Optional</sup> <a name="is_automatic_failover_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.isAutomaticFailoverEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_automatic_failover_enabled}.

---

##### `peer_autonomous_container_database_backup_config`<sup>Optional</sup> <a name="peer_autonomous_container_database_backup_config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerAutonomousContainerDatabaseBackupConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

peer_autonomous_container_database_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_backup_config}

---

##### `peer_autonomous_container_database_compartment_id`<sup>Optional</sup> <a name="peer_autonomous_container_database_compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerAutonomousContainerDatabaseCompartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_compartment_id}.

---

##### `peer_autonomous_vm_cluster_id`<sup>Optional</sup> <a name="peer_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerAutonomousVmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_vm_cluster_id}.

---

##### `peer_cloud_autonomous_vm_cluster_id`<sup>Optional</sup> <a name="peer_cloud_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerCloudAutonomousVmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_cloud_autonomous_vm_cluster_id}.

---

##### `peer_db_unique_name`<sup>Optional</sup> <a name="peer_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.peerDbUniqueName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_db_unique_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_db_unique_name}.

---

##### `standby_maintenance_buffer_in_days`<sup>Optional</sup> <a name="standby_maintenance_buffer_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.standbyMaintenanceBufferInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#standby_maintenance_buffer_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#timeouts DatabaseAutonomousContainerDatabaseDataguardAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig">put_peer_autonomous_container_database_backup_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetAutonomousContainerDatabaseDataguardAssociationId">reset_autonomous_container_database_dataguard_association_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetFastStartFailOverLagLimitInSeconds">reset_fast_start_fail_over_lag_limit_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetIsAutomaticFailoverEnabled">reset_is_automatic_failover_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseBackupConfig">reset_peer_autonomous_container_database_backup_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseCompartmentId">reset_peer_autonomous_container_database_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousVmClusterId">reset_peer_autonomous_vm_cluster_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerCloudAutonomousVmClusterId">reset_peer_cloud_autonomous_vm_cluster_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerDbUniqueName">reset_peer_db_unique_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetStandbyMaintenanceBufferInDays">reset_standby_maintenance_buffer_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_peer_autonomous_container_database_backup_config` <a name="put_peer_autonomous_container_database_backup_config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig"></a>

```python
def put_peer_autonomous_container_database_backup_config(
  backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails]] = None,
  recovery_window_in_days: typing.Union[int, float] = None
) -> None
```

###### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig.parameter.backupDestinationDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#backup_destination_details DatabaseAutonomousContainerDatabaseDataguardAssociation#backup_destination_details}

---

###### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig.parameter.recoveryWindowInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#recovery_window_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#recovery_window_in_days}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#create DatabaseAutonomousContainerDatabaseDataguardAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#delete DatabaseAutonomousContainerDatabaseDataguardAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#update DatabaseAutonomousContainerDatabaseDataguardAssociation#update}.

---

##### `reset_autonomous_container_database_dataguard_association_id` <a name="reset_autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetAutonomousContainerDatabaseDataguardAssociationId"></a>

```python
def reset_autonomous_container_database_dataguard_association_id() -> None
```

##### `reset_fast_start_fail_over_lag_limit_in_seconds` <a name="reset_fast_start_fail_over_lag_limit_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetFastStartFailOverLagLimitInSeconds"></a>

```python
def reset_fast_start_fail_over_lag_limit_in_seconds() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_automatic_failover_enabled` <a name="reset_is_automatic_failover_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetIsAutomaticFailoverEnabled"></a>

```python
def reset_is_automatic_failover_enabled() -> None
```

##### `reset_peer_autonomous_container_database_backup_config` <a name="reset_peer_autonomous_container_database_backup_config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseBackupConfig"></a>

```python
def reset_peer_autonomous_container_database_backup_config() -> None
```

##### `reset_peer_autonomous_container_database_compartment_id` <a name="reset_peer_autonomous_container_database_compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseCompartmentId"></a>

```python
def reset_peer_autonomous_container_database_compartment_id() -> None
```

##### `reset_peer_autonomous_vm_cluster_id` <a name="reset_peer_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousVmClusterId"></a>

```python
def reset_peer_autonomous_vm_cluster_id() -> None
```

##### `reset_peer_cloud_autonomous_vm_cluster_id` <a name="reset_peer_cloud_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerCloudAutonomousVmClusterId"></a>

```python
def reset_peer_cloud_autonomous_vm_cluster_id() -> None
```

##### `reset_peer_db_unique_name` <a name="reset_peer_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerDbUniqueName"></a>

```python
def reset_peer_db_unique_name() -> None
```

##### `reset_standby_maintenance_buffer_in_days` <a name="reset_standby_maintenance_buffer_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetStandbyMaintenanceBufferInDays"></a>

```python
def reset_standby_maintenance_buffer_in_days() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseDataguardAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseAutonomousContainerDatabaseDataguardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseDataguardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyLag">apply_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyRate">apply_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfig">peer_autonomous_container_database_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDataguardAssociationId">peer_autonomous_container_database_dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseId">peer_autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerLifecycleState">peer_lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerRole">peer_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastRoleChanged">time_last_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastSynced">time_last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.transportLag">transport_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationIdInput">autonomous_container_database_dataguard_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseIdInput">autonomous_container_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSecondsInput">fast_start_fail_over_lag_limit_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabledInput">is_automatic_failover_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfigInput">peer_autonomous_container_database_backup_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentIdInput">peer_autonomous_container_database_compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayNameInput">peer_autonomous_container_database_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterIdInput">peer_autonomous_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterIdInput">peer_cloud_autonomous_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueNameInput">peer_db_unique_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionModeInput">protection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDaysInput">standby_maintenance_buffer_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationId">autonomous_container_database_dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSeconds">fast_start_fail_over_lag_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabled">is_automatic_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentId">peer_autonomous_container_database_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayName">peer_autonomous_container_database_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterId">peer_autonomous_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterId">peer_cloud_autonomous_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueName">peer_db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionMode">protection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDays">standby_maintenance_buffer_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apply_lag`<sup>Required</sup> <a name="apply_lag" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyLag"></a>

```python
apply_lag: str
```

- *Type:* str

---

##### `apply_rate`<sup>Required</sup> <a name="apply_rate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyRate"></a>

```python
apply_rate: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `peer_autonomous_container_database_backup_config`<sup>Required</sup> <a name="peer_autonomous_container_database_backup_config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```python
peer_autonomous_container_database_backup_config: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference</a>

---

##### `peer_autonomous_container_database_dataguard_association_id`<sup>Required</sup> <a name="peer_autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDataguardAssociationId"></a>

```python
peer_autonomous_container_database_dataguard_association_id: str
```

- *Type:* str

---

##### `peer_autonomous_container_database_id`<sup>Required</sup> <a name="peer_autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseId"></a>

```python
peer_autonomous_container_database_id: str
```

- *Type:* str

---

##### `peer_lifecycle_state`<sup>Required</sup> <a name="peer_lifecycle_state" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerLifecycleState"></a>

```python
peer_lifecycle_state: str
```

- *Type:* str

---

##### `peer_role`<sup>Required</sup> <a name="peer_role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerRole"></a>

```python
peer_role: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_role_changed`<sup>Required</sup> <a name="time_last_role_changed" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastRoleChanged"></a>

```python
time_last_role_changed: str
```

- *Type:* str

---

##### `time_last_synced`<sup>Required</sup> <a name="time_last_synced" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastSynced"></a>

```python
time_last_synced: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference</a>

---

##### `transport_lag`<sup>Required</sup> <a name="transport_lag" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.transportLag"></a>

```python
transport_lag: str
```

- *Type:* str

---

##### `autonomous_container_database_dataguard_association_id_input`<sup>Optional</sup> <a name="autonomous_container_database_dataguard_association_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationIdInput"></a>

```python
autonomous_container_database_dataguard_association_id_input: str
```

- *Type:* str

---

##### `autonomous_container_database_id_input`<sup>Optional</sup> <a name="autonomous_container_database_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseIdInput"></a>

```python
autonomous_container_database_id_input: str
```

- *Type:* str

---

##### `fast_start_fail_over_lag_limit_in_seconds_input`<sup>Optional</sup> <a name="fast_start_fail_over_lag_limit_in_seconds_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSecondsInput"></a>

```python
fast_start_fail_over_lag_limit_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_automatic_failover_enabled_input`<sup>Optional</sup> <a name="is_automatic_failover_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabledInput"></a>

```python
is_automatic_failover_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `peer_autonomous_container_database_backup_config_input`<sup>Optional</sup> <a name="peer_autonomous_container_database_backup_config_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfigInput"></a>

```python
peer_autonomous_container_database_backup_config_input: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

---

##### `peer_autonomous_container_database_compartment_id_input`<sup>Optional</sup> <a name="peer_autonomous_container_database_compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentIdInput"></a>

```python
peer_autonomous_container_database_compartment_id_input: str
```

- *Type:* str

---

##### `peer_autonomous_container_database_display_name_input`<sup>Optional</sup> <a name="peer_autonomous_container_database_display_name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayNameInput"></a>

```python
peer_autonomous_container_database_display_name_input: str
```

- *Type:* str

---

##### `peer_autonomous_vm_cluster_id_input`<sup>Optional</sup> <a name="peer_autonomous_vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterIdInput"></a>

```python
peer_autonomous_vm_cluster_id_input: str
```

- *Type:* str

---

##### `peer_cloud_autonomous_vm_cluster_id_input`<sup>Optional</sup> <a name="peer_cloud_autonomous_vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterIdInput"></a>

```python
peer_cloud_autonomous_vm_cluster_id_input: str
```

- *Type:* str

---

##### `peer_db_unique_name_input`<sup>Optional</sup> <a name="peer_db_unique_name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueNameInput"></a>

```python
peer_db_unique_name_input: str
```

- *Type:* str

---

##### `protection_mode_input`<sup>Optional</sup> <a name="protection_mode_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionModeInput"></a>

```python
protection_mode_input: str
```

- *Type:* str

---

##### `standby_maintenance_buffer_in_days_input`<sup>Optional</sup> <a name="standby_maintenance_buffer_in_days_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDaysInput"></a>

```python
standby_maintenance_buffer_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>]

---

##### `autonomous_container_database_dataguard_association_id`<sup>Required</sup> <a name="autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```python
autonomous_container_database_dataguard_association_id: str
```

- *Type:* str

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `fast_start_fail_over_lag_limit_in_seconds`<sup>Required</sup> <a name="fast_start_fail_over_lag_limit_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSeconds"></a>

```python
fast_start_fail_over_lag_limit_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_automatic_failover_enabled`<sup>Required</sup> <a name="is_automatic_failover_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabled"></a>

```python
is_automatic_failover_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `peer_autonomous_container_database_compartment_id`<sup>Required</sup> <a name="peer_autonomous_container_database_compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```python
peer_autonomous_container_database_compartment_id: str
```

- *Type:* str

---

##### `peer_autonomous_container_database_display_name`<sup>Required</sup> <a name="peer_autonomous_container_database_display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayName"></a>

```python
peer_autonomous_container_database_display_name: str
```

- *Type:* str

---

##### `peer_autonomous_vm_cluster_id`<sup>Required</sup> <a name="peer_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterId"></a>

```python
peer_autonomous_vm_cluster_id: str
```

- *Type:* str

---

##### `peer_cloud_autonomous_vm_cluster_id`<sup>Required</sup> <a name="peer_cloud_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterId"></a>

```python
peer_cloud_autonomous_vm_cluster_id: str
```

- *Type:* str

---

##### `peer_db_unique_name`<sup>Required</sup> <a name="peer_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueName"></a>

```python
peer_db_unique_name: str
```

- *Type:* str

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

---

##### `standby_maintenance_buffer_in_days`<sup>Required</sup> <a name="standby_maintenance_buffer_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDays"></a>

```python
standby_maintenance_buffer_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationConfig <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_container_database_id: str,
  peer_autonomous_container_database_display_name: str,
  protection_mode: str,
  autonomous_container_database_dataguard_association_id: str = None,
  fast_start_fail_over_lag_limit_in_seconds: typing.Union[int, float] = None,
  id: str = None,
  is_automatic_failover_enabled: typing.Union[bool, IResolvable] = None,
  peer_autonomous_container_database_backup_config: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig = None,
  peer_autonomous_container_database_compartment_id: str = None,
  peer_autonomous_vm_cluster_id: str = None,
  peer_cloud_autonomous_vm_cluster_id: str = None,
  peer_db_unique_name: str = None,
  standby_maintenance_buffer_in_days: typing.Union[int, float] = None,
  timeouts: DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseDisplayName">peer_autonomous_container_database_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.protectionMode">protection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#protection_mode DatabaseAutonomousContainerDatabaseDataguardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseDataguardAssociationId">autonomous_container_database_dataguard_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.fastStartFailOverLagLimitInSeconds">fast_start_fail_over_lag_limit_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseDataguardAssociation#fast_start_fail_over_lag_limit_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.isAutomaticFailoverEnabled">is_automatic_failover_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_automatic_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseBackupConfig">peer_autonomous_container_database_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | peer_autonomous_container_database_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseCompartmentId">peer_autonomous_container_database_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousVmClusterId">peer_autonomous_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerCloudAutonomousVmClusterId">peer_cloud_autonomous_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerDbUniqueName">peer_db_unique_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_db_unique_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.standbyMaintenanceBufferInDays">standby_maintenance_buffer_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#standby_maintenance_buffer_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}.

---

##### `peer_autonomous_container_database_display_name`<sup>Required</sup> <a name="peer_autonomous_container_database_display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseDisplayName"></a>

```python
peer_autonomous_container_database_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_display_name}.

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#protection_mode DatabaseAutonomousContainerDatabaseDataguardAssociation#protection_mode}.

---

##### `autonomous_container_database_dataguard_association_id`<sup>Optional</sup> <a name="autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```python
autonomous_container_database_dataguard_association_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}.

---

##### `fast_start_fail_over_lag_limit_in_seconds`<sup>Optional</sup> <a name="fast_start_fail_over_lag_limit_in_seconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.fastStartFailOverLagLimitInSeconds"></a>

```python
fast_start_fail_over_lag_limit_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseDataguardAssociation#fast_start_fail_over_lag_limit_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_automatic_failover_enabled`<sup>Optional</sup> <a name="is_automatic_failover_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.isAutomaticFailoverEnabled"></a>

```python
is_automatic_failover_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_automatic_failover_enabled}.

---

##### `peer_autonomous_container_database_backup_config`<sup>Optional</sup> <a name="peer_autonomous_container_database_backup_config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```python
peer_autonomous_container_database_backup_config: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

peer_autonomous_container_database_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_backup_config}

---

##### `peer_autonomous_container_database_compartment_id`<sup>Optional</sup> <a name="peer_autonomous_container_database_compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```python
peer_autonomous_container_database_compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_compartment_id}.

---

##### `peer_autonomous_vm_cluster_id`<sup>Optional</sup> <a name="peer_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousVmClusterId"></a>

```python
peer_autonomous_vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_vm_cluster_id}.

---

##### `peer_cloud_autonomous_vm_cluster_id`<sup>Optional</sup> <a name="peer_cloud_autonomous_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerCloudAutonomousVmClusterId"></a>

```python
peer_cloud_autonomous_vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_cloud_autonomous_vm_cluster_id}.

---

##### `peer_db_unique_name`<sup>Optional</sup> <a name="peer_db_unique_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerDbUniqueName"></a>

```python
peer_db_unique_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_db_unique_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_db_unique_name}.

---

##### `standby_maintenance_buffer_in_days`<sup>Optional</sup> <a name="standby_maintenance_buffer_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.standbyMaintenanceBufferInDays"></a>

```python
standby_maintenance_buffer_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#standby_maintenance_buffer_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#timeouts DatabaseAutonomousContainerDatabaseDataguardAssociation#timeouts}

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig(
  backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails]] = None,
  recovery_window_in_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails">backup_destination_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]]</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#recovery_window_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#recovery_window_in_days}. |

---

##### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails"></a>

```python
backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#backup_destination_details DatabaseAutonomousContainerDatabaseDataguardAssociation#backup_destination_details}

---

##### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#recovery_window_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#recovery_window_in_days}.

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails(
  type: str,
  dbrs_policy_id: str = None,
  id: str = None,
  internet_proxy: str = None,
  vpc_password: str = None,
  vpc_user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#type DatabaseAutonomousContainerDatabaseDataguardAssociation#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#dbrs_policy_id DatabaseAutonomousContainerDatabaseDataguardAssociation#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy">internet_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#internet_proxy DatabaseAutonomousContainerDatabaseDataguardAssociation#internet_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword">vpc_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_password DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser">vpc_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_user DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_user}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#type DatabaseAutonomousContainerDatabaseDataguardAssociation#type}.

---

##### `dbrs_policy_id`<sup>Optional</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#dbrs_policy_id DatabaseAutonomousContainerDatabaseDataguardAssociation#dbrs_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_proxy`<sup>Optional</sup> <a name="internet_proxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy"></a>

```python
internet_proxy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#internet_proxy DatabaseAutonomousContainerDatabaseDataguardAssociation#internet_proxy}.

---

##### `vpc_password`<sup>Optional</sup> <a name="vpc_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword"></a>

```python
vpc_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_password DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_password}.

---

##### `vpc_user`<sup>Optional</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_user DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_user}.

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#create DatabaseAutonomousContainerDatabaseDataguardAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#delete DatabaseAutonomousContainerDatabaseDataguardAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#update DatabaseAutonomousContainerDatabaseDataguardAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#create DatabaseAutonomousContainerDatabaseDataguardAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#delete DatabaseAutonomousContainerDatabaseDataguardAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#update DatabaseAutonomousContainerDatabaseDataguardAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]]

---


### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">reset_dbrs_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy">reset_internet_proxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword">reset_vpc_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser">reset_vpc_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dbrs_policy_id` <a name="reset_dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```python
def reset_dbrs_policy_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internet_proxy` <a name="reset_internet_proxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy"></a>

```python
def reset_internet_proxy() -> None
```

##### `reset_vpc_password` <a name="reset_vpc_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword"></a>

```python
def reset_vpc_password() -> None
```

##### `reset_vpc_user` <a name="reset_vpc_user" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```python
def reset_vpc_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">dbrs_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput">internet_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput">vpc_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput">vpc_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internet_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpc_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpc_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbrs_policy_id_input`<sup>Optional</sup> <a name="dbrs_policy_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```python
dbrs_policy_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internet_proxy_input`<sup>Optional</sup> <a name="internet_proxy_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput"></a>

```python
internet_proxy_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_password_input`<sup>Optional</sup> <a name="vpc_password_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput"></a>

```python
vpc_password_input: str
```

- *Type:* str

---

##### `vpc_user_input`<sup>Optional</sup> <a name="vpc_user_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```python
vpc_user_input: str
```

- *Type:* str

---

##### `dbrs_policy_id`<sup>Required</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internet_proxy`<sup>Required</sup> <a name="internet_proxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```python
internet_proxy: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_password`<sup>Required</sup> <a name="vpc_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```python
vpc_password: str
```

- *Type:* str

---

##### `vpc_user`<sup>Required</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]

---


### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails">put_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails">reset_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays">reset_recovery_window_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_destination_details` <a name="put_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails"></a>

```python
def put_backup_destination_details(
  value: typing.Union[IResolvable, typing.List[DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]]

---

##### `reset_backup_destination_details` <a name="reset_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```python
def reset_backup_destination_details() -> None
```

##### `reset_recovery_window_in_days` <a name="reset_recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```python
def reset_recovery_window_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput">backup_destination_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput">recovery_window_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```python
backup_destination_details: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `backup_destination_details_input`<sup>Optional</sup> <a name="backup_destination_details_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```python
backup_destination_details_input: typing.Union[IResolvable, typing.List[DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails</a>]]

---

##### `recovery_window_in_days_input`<sup>Optional</sup> <a name="recovery_window_in_days_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```python
recovery_window_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_window_in_days`<sup>Required</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

---


### DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association

databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>]

---



