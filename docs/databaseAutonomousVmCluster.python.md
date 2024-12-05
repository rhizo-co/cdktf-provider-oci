# `databaseAutonomousVmCluster` Submodule <a name="`databaseAutonomousVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousVmCluster <a name="DatabaseAutonomousVmCluster" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster oci_database_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmCluster(
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
  display_name: str,
  exadata_infrastructure_id: str,
  vm_cluster_network_id: str,
  autonomous_data_storage_size_in_tbs: typing.Union[int, float] = None,
  compute_model: str = None,
  cpu_core_count_per_node: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_local_backup_enabled: typing.Union[bool, IResolvable] = None,
  is_mtls_enabled: typing.Union[bool, IResolvable] = None,
  license_model: str = None,
  maintenance_window_details: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetails]] = None,
  memory_per_oracle_compute_unit_in_gbs: typing.Union[int, float] = None,
  scan_listener_port_non_tls: typing.Union[int, float] = None,
  scan_listener_port_tls: typing.Union[int, float] = None,
  timeouts: DatabaseAutonomousVmClusterTimeouts = None,
  time_zone: str = None,
  total_container_databases: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#compartment_id DatabaseAutonomousVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#display_name DatabaseAutonomousVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#exadata_infrastructure_id DatabaseAutonomousVmCluster#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.vmClusterNetworkId">vm_cluster_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#vm_cluster_network_id DatabaseAutonomousVmCluster#vm_cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.autonomousDataStorageSizeInTbs">autonomous_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#autonomous_data_storage_size_in_tbs DatabaseAutonomousVmCluster#autonomous_data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.computeModel">compute_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#compute_model DatabaseAutonomousVmCluster#compute_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.cpuCoreCountPerNode">cpu_core_count_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#cpu_core_count_per_node DatabaseAutonomousVmCluster#cpu_core_count_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#db_servers DatabaseAutonomousVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#defined_tags DatabaseAutonomousVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#freeform_tags DatabaseAutonomousVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#id DatabaseAutonomousVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_local_backup_enabled DatabaseAutonomousVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.isMtlsEnabled">is_mtls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_mtls_enabled DatabaseAutonomousVmCluster#is_mtls_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#license_model DatabaseAutonomousVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.maintenanceWindowDetails">maintenance_window_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]]</code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.memoryPerOracleComputeUnitInGbs">memory_per_oracle_compute_unit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_gbs DatabaseAutonomousVmCluster#memory_per_oracle_compute_unit_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.scanListenerPortNonTls">scan_listener_port_non_tls</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#scan_listener_port_non_tls DatabaseAutonomousVmCluster#scan_listener_port_non_tls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.scanListenerPortTls">scan_listener_port_tls</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#scan_listener_port_tls DatabaseAutonomousVmCluster#scan_listener_port_tls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts">DatabaseAutonomousVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#time_zone DatabaseAutonomousVmCluster#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.totalContainerDatabases">total_container_databases</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#total_container_databases DatabaseAutonomousVmCluster#total_container_databases}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#compartment_id DatabaseAutonomousVmCluster#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#display_name DatabaseAutonomousVmCluster#display_name}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.exadataInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#exadata_infrastructure_id DatabaseAutonomousVmCluster#exadata_infrastructure_id}.

---

##### `vm_cluster_network_id`<sup>Required</sup> <a name="vm_cluster_network_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.vmClusterNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#vm_cluster_network_id DatabaseAutonomousVmCluster#vm_cluster_network_id}.

---

##### `autonomous_data_storage_size_in_tbs`<sup>Optional</sup> <a name="autonomous_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.autonomousDataStorageSizeInTbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#autonomous_data_storage_size_in_tbs DatabaseAutonomousVmCluster#autonomous_data_storage_size_in_tbs}.

---

##### `compute_model`<sup>Optional</sup> <a name="compute_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.computeModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#compute_model DatabaseAutonomousVmCluster#compute_model}.

---

##### `cpu_core_count_per_node`<sup>Optional</sup> <a name="cpu_core_count_per_node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.cpuCoreCountPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#cpu_core_count_per_node DatabaseAutonomousVmCluster#cpu_core_count_per_node}.

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.dbServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#db_servers DatabaseAutonomousVmCluster#db_servers}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#defined_tags DatabaseAutonomousVmCluster#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#freeform_tags DatabaseAutonomousVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#id DatabaseAutonomousVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_local_backup_enabled`<sup>Optional</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.isLocalBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_local_backup_enabled DatabaseAutonomousVmCluster#is_local_backup_enabled}.

---

##### `is_mtls_enabled`<sup>Optional</sup> <a name="is_mtls_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.isMtlsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_mtls_enabled DatabaseAutonomousVmCluster#is_mtls_enabled}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#license_model DatabaseAutonomousVmCluster#license_model}.

---

##### `maintenance_window_details`<sup>Optional</sup> <a name="maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.maintenanceWindowDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]]

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#maintenance_window_details DatabaseAutonomousVmCluster#maintenance_window_details}

---

##### `memory_per_oracle_compute_unit_in_gbs`<sup>Optional</sup> <a name="memory_per_oracle_compute_unit_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.memoryPerOracleComputeUnitInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_gbs DatabaseAutonomousVmCluster#memory_per_oracle_compute_unit_in_gbs}.

---

##### `scan_listener_port_non_tls`<sup>Optional</sup> <a name="scan_listener_port_non_tls" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.scanListenerPortNonTls"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#scan_listener_port_non_tls DatabaseAutonomousVmCluster#scan_listener_port_non_tls}.

---

##### `scan_listener_port_tls`<sup>Optional</sup> <a name="scan_listener_port_tls" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.scanListenerPortTls"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#scan_listener_port_tls DatabaseAutonomousVmCluster#scan_listener_port_tls}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts">DatabaseAutonomousVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#timeouts DatabaseAutonomousVmCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#time_zone DatabaseAutonomousVmCluster#time_zone}.

---

##### `total_container_databases`<sup>Optional</sup> <a name="total_container_databases" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.Initializer.parameter.totalContainerDatabases"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#total_container_databases DatabaseAutonomousVmCluster#total_container_databases}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.putMaintenanceWindowDetails">put_maintenance_window_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetAutonomousDataStorageSizeInTbs">reset_autonomous_data_storage_size_in_tbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetComputeModel">reset_compute_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetCpuCoreCountPerNode">reset_cpu_core_count_per_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetDbServers">reset_db_servers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetIsLocalBackupEnabled">reset_is_local_backup_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetIsMtlsEnabled">reset_is_mtls_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetMaintenanceWindowDetails">reset_maintenance_window_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGbs">reset_memory_per_oracle_compute_unit_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetScanListenerPortNonTls">reset_scan_listener_port_non_tls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetScanListenerPortTls">reset_scan_listener_port_tls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetTimeZone">reset_time_zone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetTotalContainerDatabases">reset_total_container_databases</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_maintenance_window_details` <a name="put_maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.putMaintenanceWindowDetails"></a>

```python
def put_maintenance_window_details(
  value: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.putMaintenanceWindowDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#create DatabaseAutonomousVmCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#delete DatabaseAutonomousVmCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#update DatabaseAutonomousVmCluster#update}.

---

##### `reset_autonomous_data_storage_size_in_tbs` <a name="reset_autonomous_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetAutonomousDataStorageSizeInTbs"></a>

```python
def reset_autonomous_data_storage_size_in_tbs() -> None
```

##### `reset_compute_model` <a name="reset_compute_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetComputeModel"></a>

```python
def reset_compute_model() -> None
```

##### `reset_cpu_core_count_per_node` <a name="reset_cpu_core_count_per_node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetCpuCoreCountPerNode"></a>

```python
def reset_cpu_core_count_per_node() -> None
```

##### `reset_db_servers` <a name="reset_db_servers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetDbServers"></a>

```python
def reset_db_servers() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_local_backup_enabled` <a name="reset_is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetIsLocalBackupEnabled"></a>

```python
def reset_is_local_backup_enabled() -> None
```

##### `reset_is_mtls_enabled` <a name="reset_is_mtls_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetIsMtlsEnabled"></a>

```python
def reset_is_mtls_enabled() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_maintenance_window_details` <a name="reset_maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetMaintenanceWindowDetails"></a>

```python
def reset_maintenance_window_details() -> None
```

##### `reset_memory_per_oracle_compute_unit_in_gbs` <a name="reset_memory_per_oracle_compute_unit_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGbs"></a>

```python
def reset_memory_per_oracle_compute_unit_in_gbs() -> None
```

##### `reset_scan_listener_port_non_tls` <a name="reset_scan_listener_port_non_tls" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetScanListenerPortNonTls"></a>

```python
def reset_scan_listener_port_non_tls() -> None
```

##### `reset_scan_listener_port_tls` <a name="reset_scan_listener_port_tls" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetScanListenerPortTls"></a>

```python
def reset_scan_listener_port_tls() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

##### `reset_total_container_databases` <a name="reset_total_container_databases" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.resetTotalContainerDatabases"></a>

```python
def reset_total_container_databases() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseAutonomousVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseAutonomousVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseAutonomousVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.autonomousDataStoragePercentage">autonomous_data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs">available_autonomous_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.availableContainerDatabases">available_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.availableCpus">available_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.availableDataStorageSizeInTbs">available_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpuPercentage">cpu_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpusEnabled">cpus_enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpusLowestScaledValue">cpus_lowest_scaled_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue">exadata_storage_in_tbs_lowest_scaled_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.lastMaintenanceRunId">last_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList">DatabaseAutonomousVmClusterMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.maintenanceWindowDetails">maintenance_window_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList">DatabaseAutonomousVmClusterMaintenanceWindowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.maxAcdsLowestScaledValue">max_acds_lowest_scaled_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.nextMaintenanceRunId">next_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">non_provisionable_autonomous_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.ocpusEnabled">ocpus_enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">provisionable_autonomous_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">provisioned_autonomous_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provisionedCpus">provisioned_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.reclaimableCpus">reclaimable_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.reservedCpus">reserved_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeDatabaseSslCertificateExpires">time_database_ssl_certificate_expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeOrdsCertificateExpires">time_ords_certificate_expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference">DatabaseAutonomousVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.totalAutonomousDataStorageInTbs">total_autonomous_data_storage_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.autonomousDataStorageSizeInTbsInput">autonomous_data_storage_size_in_tbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.computeModelInput">compute_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpuCoreCountPerNodeInput">cpu_core_count_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dbServersInput">db_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.exadataInfrastructureIdInput">exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.isLocalBackupEnabledInput">is_local_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.isMtlsEnabledInput">is_mtls_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.maintenanceWindowDetailsInput">maintenance_window_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbsInput">memory_per_oracle_compute_unit_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.scanListenerPortNonTlsInput">scan_listener_port_non_tls_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.scanListenerPortTlsInput">scan_listener_port_tls_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts">DatabaseAutonomousVmClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.totalContainerDatabasesInput">total_container_databases_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.vmClusterNetworkIdInput">vm_cluster_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.autonomousDataStorageSizeInTbs">autonomous_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpuCoreCountPerNode">cpu_core_count_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.isMtlsEnabled">is_mtls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs">memory_per_oracle_compute_unit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.scanListenerPortNonTls">scan_listener_port_non_tls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.scanListenerPortTls">scan_listener_port_tls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.totalContainerDatabases">total_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.vmClusterNetworkId">vm_cluster_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_data_storage_percentage`<sup>Required</sup> <a name="autonomous_data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```python
autonomous_data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_autonomous_data_storage_size_in_tbs`<sup>Required</sup> <a name="available_autonomous_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs"></a>

```python
available_autonomous_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_container_databases`<sup>Required</sup> <a name="available_container_databases" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.availableContainerDatabases"></a>

```python
available_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_cpus`<sup>Required</sup> <a name="available_cpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.availableCpus"></a>

```python
available_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_data_storage_size_in_tbs`<sup>Required</sup> <a name="available_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.availableDataStorageSizeInTbs"></a>

```python
available_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_percentage`<sup>Required</sup> <a name="cpu_percentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpuPercentage"></a>

```python
cpu_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpus_enabled`<sup>Required</sup> <a name="cpus_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpusEnabled"></a>

```python
cpus_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpus_lowest_scaled_value`<sup>Required</sup> <a name="cpus_lowest_scaled_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpusLowestScaledValue"></a>

```python
cpus_lowest_scaled_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exadata_storage_in_tbs_lowest_scaled_value`<sup>Required</sup> <a name="exadata_storage_in_tbs_lowest_scaled_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue"></a>

```python
exadata_storage_in_tbs_lowest_scaled_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_maintenance_run_id`<sup>Required</sup> <a name="last_maintenance_run_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.lastMaintenanceRunId"></a>

```python
last_maintenance_run_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.maintenanceWindow"></a>

```python
maintenance_window: DatabaseAutonomousVmClusterMaintenanceWindowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList">DatabaseAutonomousVmClusterMaintenanceWindowList</a>

---

##### `maintenance_window_details`<sup>Required</sup> <a name="maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.maintenanceWindowDetails"></a>

```python
maintenance_window_details: DatabaseAutonomousVmClusterMaintenanceWindowDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList">DatabaseAutonomousVmClusterMaintenanceWindowDetailsList</a>

---

##### `max_acds_lowest_scaled_value`<sup>Required</sup> <a name="max_acds_lowest_scaled_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```python
max_acds_lowest_scaled_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `next_maintenance_run_id`<sup>Required</sup> <a name="next_maintenance_run_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.nextMaintenanceRunId"></a>

```python
next_maintenance_run_id: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `non_provisionable_autonomous_container_databases`<sup>Required</sup> <a name="non_provisionable_autonomous_container_databases" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```python
non_provisionable_autonomous_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_enabled`<sup>Required</sup> <a name="ocpus_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.ocpusEnabled"></a>

```python
ocpus_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisionable_autonomous_container_databases`<sup>Required</sup> <a name="provisionable_autonomous_container_databases" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```python
provisionable_autonomous_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_autonomous_container_databases`<sup>Required</sup> <a name="provisioned_autonomous_container_databases" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```python
provisioned_autonomous_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_cpus`<sup>Required</sup> <a name="provisioned_cpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.provisionedCpus"></a>

```python
provisioned_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reclaimable_cpus`<sup>Required</sup> <a name="reclaimable_cpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.reclaimableCpus"></a>

```python
reclaimable_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reserved_cpus`<sup>Required</sup> <a name="reserved_cpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.reservedCpus"></a>

```python
reserved_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_database_ssl_certificate_expires`<sup>Required</sup> <a name="time_database_ssl_certificate_expires" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeDatabaseSslCertificateExpires"></a>

```python
time_database_ssl_certificate_expires: str
```

- *Type:* str

---

##### `time_ords_certificate_expires`<sup>Required</sup> <a name="time_ords_certificate_expires" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeOrdsCertificateExpires"></a>

```python
time_ords_certificate_expires: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference">DatabaseAutonomousVmClusterTimeoutsOutputReference</a>

---

##### `total_autonomous_data_storage_in_tbs`<sup>Required</sup> <a name="total_autonomous_data_storage_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.totalAutonomousDataStorageInTbs"></a>

```python
total_autonomous_data_storage_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autonomous_data_storage_size_in_tbs_input`<sup>Optional</sup> <a name="autonomous_data_storage_size_in_tbs_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.autonomousDataStorageSizeInTbsInput"></a>

```python
autonomous_data_storage_size_in_tbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_model_input`<sup>Optional</sup> <a name="compute_model_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.computeModelInput"></a>

```python
compute_model_input: str
```

- *Type:* str

---

##### `cpu_core_count_per_node_input`<sup>Optional</sup> <a name="cpu_core_count_per_node_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpuCoreCountPerNodeInput"></a>

```python
cpu_core_count_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers_input`<sup>Optional</sup> <a name="db_servers_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dbServersInput"></a>

```python
db_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exadata_infrastructure_id_input`<sup>Optional</sup> <a name="exadata_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.exadataInfrastructureIdInput"></a>

```python
exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_local_backup_enabled_input`<sup>Optional</sup> <a name="is_local_backup_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.isLocalBackupEnabledInput"></a>

```python
is_local_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_mtls_enabled_input`<sup>Optional</sup> <a name="is_mtls_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.isMtlsEnabledInput"></a>

```python
is_mtls_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `maintenance_window_details_input`<sup>Optional</sup> <a name="maintenance_window_details_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.maintenanceWindowDetailsInput"></a>

```python
maintenance_window_details_input: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]]

---

##### `memory_per_oracle_compute_unit_in_gbs_input`<sup>Optional</sup> <a name="memory_per_oracle_compute_unit_in_gbs_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbsInput"></a>

```python
memory_per_oracle_compute_unit_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_non_tls_input`<sup>Optional</sup> <a name="scan_listener_port_non_tls_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.scanListenerPortNonTlsInput"></a>

```python
scan_listener_port_non_tls_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tls_input`<sup>Optional</sup> <a name="scan_listener_port_tls_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.scanListenerPortTlsInput"></a>

```python
scan_listener_port_tls_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseAutonomousVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts">DatabaseAutonomousVmClusterTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `total_container_databases_input`<sup>Optional</sup> <a name="total_container_databases_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.totalContainerDatabasesInput"></a>

```python
total_container_databases_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_cluster_network_id_input`<sup>Optional</sup> <a name="vm_cluster_network_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.vmClusterNetworkIdInput"></a>

```python
vm_cluster_network_id_input: str
```

- *Type:* str

---

##### `autonomous_data_storage_size_in_tbs`<sup>Required</sup> <a name="autonomous_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.autonomousDataStorageSizeInTbs"></a>

```python
autonomous_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `cpu_core_count_per_node`<sup>Required</sup> <a name="cpu_core_count_per_node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```python
cpu_core_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_local_backup_enabled`<sup>Required</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_mtls_enabled`<sup>Required</sup> <a name="is_mtls_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.isMtlsEnabled"></a>

```python
is_mtls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `memory_per_oracle_compute_unit_in_gbs`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs"></a>

```python
memory_per_oracle_compute_unit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_non_tls`<sup>Required</sup> <a name="scan_listener_port_non_tls" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```python
scan_listener_port_non_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tls`<sup>Required</sup> <a name="scan_listener_port_tls" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.scanListenerPortTls"></a>

```python
scan_listener_port_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `total_container_databases`<sup>Required</sup> <a name="total_container_databases" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.totalContainerDatabases"></a>

```python
total_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_cluster_network_id`<sup>Required</sup> <a name="vm_cluster_network_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.vmClusterNetworkId"></a>

```python
vm_cluster_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousVmClusterConfig <a name="DatabaseAutonomousVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  exadata_infrastructure_id: str,
  vm_cluster_network_id: str,
  autonomous_data_storage_size_in_tbs: typing.Union[int, float] = None,
  compute_model: str = None,
  cpu_core_count_per_node: typing.Union[int, float] = None,
  db_servers: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_local_backup_enabled: typing.Union[bool, IResolvable] = None,
  is_mtls_enabled: typing.Union[bool, IResolvable] = None,
  license_model: str = None,
  maintenance_window_details: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetails]] = None,
  memory_per_oracle_compute_unit_in_gbs: typing.Union[int, float] = None,
  scan_listener_port_non_tls: typing.Union[int, float] = None,
  scan_listener_port_tls: typing.Union[int, float] = None,
  timeouts: DatabaseAutonomousVmClusterTimeouts = None,
  time_zone: str = None,
  total_container_databases: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#compartment_id DatabaseAutonomousVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#display_name DatabaseAutonomousVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#exadata_infrastructure_id DatabaseAutonomousVmCluster#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.vmClusterNetworkId">vm_cluster_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#vm_cluster_network_id DatabaseAutonomousVmCluster#vm_cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTbs">autonomous_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#autonomous_data_storage_size_in_tbs DatabaseAutonomousVmCluster#autonomous_data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.computeModel">compute_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#compute_model DatabaseAutonomousVmCluster#compute_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.cpuCoreCountPerNode">cpu_core_count_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#cpu_core_count_per_node DatabaseAutonomousVmCluster#cpu_core_count_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#db_servers DatabaseAutonomousVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#defined_tags DatabaseAutonomousVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#freeform_tags DatabaseAutonomousVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#id DatabaseAutonomousVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_local_backup_enabled DatabaseAutonomousVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.isMtlsEnabled">is_mtls_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_mtls_enabled DatabaseAutonomousVmCluster#is_mtls_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#license_model DatabaseAutonomousVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.maintenanceWindowDetails">maintenance_window_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]]</code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGbs">memory_per_oracle_compute_unit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_gbs DatabaseAutonomousVmCluster#memory_per_oracle_compute_unit_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.scanListenerPortNonTls">scan_listener_port_non_tls</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#scan_listener_port_non_tls DatabaseAutonomousVmCluster#scan_listener_port_non_tls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.scanListenerPortTls">scan_listener_port_tls</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#scan_listener_port_tls DatabaseAutonomousVmCluster#scan_listener_port_tls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts">DatabaseAutonomousVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#time_zone DatabaseAutonomousVmCluster#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.totalContainerDatabases">total_container_databases</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#total_container_databases DatabaseAutonomousVmCluster#total_container_databases}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#compartment_id DatabaseAutonomousVmCluster#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#display_name DatabaseAutonomousVmCluster#display_name}.

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#exadata_infrastructure_id DatabaseAutonomousVmCluster#exadata_infrastructure_id}.

---

##### `vm_cluster_network_id`<sup>Required</sup> <a name="vm_cluster_network_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.vmClusterNetworkId"></a>

```python
vm_cluster_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#vm_cluster_network_id DatabaseAutonomousVmCluster#vm_cluster_network_id}.

---

##### `autonomous_data_storage_size_in_tbs`<sup>Optional</sup> <a name="autonomous_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTbs"></a>

```python
autonomous_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#autonomous_data_storage_size_in_tbs DatabaseAutonomousVmCluster#autonomous_data_storage_size_in_tbs}.

---

##### `compute_model`<sup>Optional</sup> <a name="compute_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#compute_model DatabaseAutonomousVmCluster#compute_model}.

---

##### `cpu_core_count_per_node`<sup>Optional</sup> <a name="cpu_core_count_per_node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.cpuCoreCountPerNode"></a>

```python
cpu_core_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#cpu_core_count_per_node DatabaseAutonomousVmCluster#cpu_core_count_per_node}.

---

##### `db_servers`<sup>Optional</sup> <a name="db_servers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#db_servers DatabaseAutonomousVmCluster#db_servers}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#defined_tags DatabaseAutonomousVmCluster#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#freeform_tags DatabaseAutonomousVmCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#id DatabaseAutonomousVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_local_backup_enabled`<sup>Optional</sup> <a name="is_local_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_local_backup_enabled DatabaseAutonomousVmCluster#is_local_backup_enabled}.

---

##### `is_mtls_enabled`<sup>Optional</sup> <a name="is_mtls_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.isMtlsEnabled"></a>

```python
is_mtls_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_mtls_enabled DatabaseAutonomousVmCluster#is_mtls_enabled}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#license_model DatabaseAutonomousVmCluster#license_model}.

---

##### `maintenance_window_details`<sup>Optional</sup> <a name="maintenance_window_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.maintenanceWindowDetails"></a>

```python
maintenance_window_details: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]]

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#maintenance_window_details DatabaseAutonomousVmCluster#maintenance_window_details}

---

##### `memory_per_oracle_compute_unit_in_gbs`<sup>Optional</sup> <a name="memory_per_oracle_compute_unit_in_gbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGbs"></a>

```python
memory_per_oracle_compute_unit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_gbs DatabaseAutonomousVmCluster#memory_per_oracle_compute_unit_in_gbs}.

---

##### `scan_listener_port_non_tls`<sup>Optional</sup> <a name="scan_listener_port_non_tls" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.scanListenerPortNonTls"></a>

```python
scan_listener_port_non_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#scan_listener_port_non_tls DatabaseAutonomousVmCluster#scan_listener_port_non_tls}.

---

##### `scan_listener_port_tls`<sup>Optional</sup> <a name="scan_listener_port_tls" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.scanListenerPortTls"></a>

```python
scan_listener_port_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#scan_listener_port_tls DatabaseAutonomousVmCluster#scan_listener_port_tls}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousVmClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts">DatabaseAutonomousVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#timeouts DatabaseAutonomousVmCluster#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#time_zone DatabaseAutonomousVmCluster#time_zone}.

---

##### `total_container_databases`<sup>Optional</sup> <a name="total_container_databases" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterConfig.property.totalContainerDatabases"></a>

```python
total_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#total_container_databases DatabaseAutonomousVmCluster#total_container_databases}.

---

### DatabaseAutonomousVmClusterMaintenanceWindow <a name="DatabaseAutonomousVmClusterMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindow()
```


### DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek <a name="DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek()
```


### DatabaseAutonomousVmClusterMaintenanceWindowDetails <a name="DatabaseAutonomousVmClusterMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails(
  custom_action_timeout_in_mins: typing.Union[int, float] = None,
  days_of_week: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek]] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable] = None,
  is_monthly_patching_enabled: typing.Union[bool, IResolvable] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths]] = None,
  patching_mode: str = None,
  preference: str = None,
  skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]] = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#custom_action_timeout_in_mins DatabaseAutonomousVmCluster#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.daysOfWeek">days_of_week</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>]]</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#hours_of_day DatabaseAutonomousVmCluster#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_custom_action_timeout_enabled DatabaseAutonomousVmCluster#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_monthly_patching_enabled DatabaseAutonomousVmCluster#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#lead_time_in_weeks DatabaseAutonomousVmCluster#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.months">months</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>]]</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.patchingMode">patching_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#patching_mode DatabaseAutonomousVmCluster#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.preference">preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#preference DatabaseAutonomousVmCluster#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.skipRu">skip_ru</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#skip_ru DatabaseAutonomousVmCluster#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#weeks_of_month DatabaseAutonomousVmCluster#weeks_of_month}. |

---

##### `custom_action_timeout_in_mins`<sup>Optional</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#custom_action_timeout_in_mins DatabaseAutonomousVmCluster#custom_action_timeout_in_mins}.

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.daysOfWeek"></a>

```python
days_of_week: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>]]

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#days_of_week DatabaseAutonomousVmCluster#days_of_week}

---

##### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#hours_of_day DatabaseAutonomousVmCluster#hours_of_day}.

---

##### `is_custom_action_timeout_enabled`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_custom_action_timeout_enabled DatabaseAutonomousVmCluster#is_custom_action_timeout_enabled}.

---

##### `is_monthly_patching_enabled`<sup>Optional</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#is_monthly_patching_enabled DatabaseAutonomousVmCluster#is_monthly_patching_enabled}.

---

##### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#lead_time_in_weeks DatabaseAutonomousVmCluster#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.months"></a>

```python
months: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>]]

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#months DatabaseAutonomousVmCluster#months}

---

##### `patching_mode`<sup>Optional</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#patching_mode DatabaseAutonomousVmCluster#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.preference"></a>

```python
preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#preference DatabaseAutonomousVmCluster#preference}.

---

##### `skip_ru`<sup>Optional</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.skipRu"></a>

```python
skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#skip_ru DatabaseAutonomousVmCluster#skip_ru}.

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#weeks_of_month DatabaseAutonomousVmCluster#weeks_of_month}.

---

### DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#name DatabaseAutonomousVmCluster#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#name DatabaseAutonomousVmCluster#name}.

---

### DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths <a name="DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#name DatabaseAutonomousVmCluster#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#name DatabaseAutonomousVmCluster#name}.

---

### DatabaseAutonomousVmClusterMaintenanceWindowMonths <a name="DatabaseAutonomousVmClusterMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonths()
```


### DatabaseAutonomousVmClusterTimeouts <a name="DatabaseAutonomousVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#create DatabaseAutonomousVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#delete DatabaseAutonomousVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#update DatabaseAutonomousVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#create DatabaseAutonomousVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#delete DatabaseAutonomousVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster#update DatabaseAutonomousVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList <a name="DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>

---


### DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>]]

---


### DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>]

---


### DatabaseAutonomousVmClusterMaintenanceWindowDetailsList <a name="DatabaseAutonomousVmClusterMaintenanceWindowDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]]

---


### DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList <a name="DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>]]

---


### DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>]

---


### DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference <a name="DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putDaysOfWeek">put_days_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putMonths">put_months</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">reset_custom_action_timeout_in_mins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetHoursOfDay">reset_hours_of_day</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">reset_is_custom_action_timeout_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">reset_is_monthly_patching_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">reset_lead_time_in_weeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetMonths">reset_months</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetPatchingMode">reset_patching_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetPreference">reset_preference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetSkipRu">reset_skip_ru</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_days_of_week` <a name="put_days_of_week" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```python
def put_days_of_week(
  value: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>]]

---

##### `put_months` <a name="put_months" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putMonths"></a>

```python
def put_months(
  value: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>]]

---

##### `reset_custom_action_timeout_in_mins` <a name="reset_custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```python
def reset_custom_action_timeout_in_mins() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hours_of_day` <a name="reset_hours_of_day" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```python
def reset_hours_of_day() -> None
```

##### `reset_is_custom_action_timeout_enabled` <a name="reset_is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```python
def reset_is_custom_action_timeout_enabled() -> None
```

##### `reset_is_monthly_patching_enabled` <a name="reset_is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```python
def reset_is_monthly_patching_enabled() -> None
```

##### `reset_lead_time_in_weeks` <a name="reset_lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```python
def reset_lead_time_in_weeks() -> None
```

##### `reset_months` <a name="reset_months" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```python
def reset_months() -> None
```

##### `reset_patching_mode` <a name="reset_patching_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```python
def reset_patching_mode() -> None
```

##### `reset_preference` <a name="reset_preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```python
def reset_preference() -> None
```

##### `reset_skip_ru` <a name="reset_skip_ru" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```python
def reset_skip_ru() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">custom_action_timeout_in_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">hours_of_day_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">is_custom_action_timeout_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">is_monthly_patching_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">lead_time_in_weeks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.monthsInput">months_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingModeInput">patching_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preferenceInput">preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRuInput">skip_ru_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRu">skip_ru</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.months"></a>

```python
months: DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonthsList</a>

---

##### `custom_action_timeout_in_mins_input`<sup>Optional</sup> <a name="custom_action_timeout_in_mins_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```python
custom_action_timeout_in_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek">DatabaseAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek</a>]]

---

##### `hours_of_day_input`<sup>Optional</sup> <a name="hours_of_day_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```python
hours_of_day_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled_input`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```python
is_custom_action_timeout_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_monthly_patching_enabled_input`<sup>Optional</sup> <a name="is_monthly_patching_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```python
is_monthly_patching_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_in_weeks_input`<sup>Optional</sup> <a name="lead_time_in_weeks_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```python
lead_time_in_weeks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```python
months_input: typing.Union[IResolvable, typing.List[DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths">DatabaseAutonomousVmClusterMaintenanceWindowDetailsMonths</a>]]

---

##### `patching_mode_input`<sup>Optional</sup> <a name="patching_mode_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```python
patching_mode_input: str
```

- *Type:* str

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```python
preference_input: str
```

- *Type:* str

---

##### `skip_ru_input`<sup>Optional</sup> <a name="skip_ru_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```python
skip_ru_input: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `skip_ru`<sup>Required</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```python
skip_ru: typing.Union[IResolvable, typing.List[typing.Union[bool, IResolvable]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Union[bool, cdktf.IResolvable]]]

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousVmClusterMaintenanceWindowDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDetails">DatabaseAutonomousVmClusterMaintenanceWindowDetails</a>]

---


### DatabaseAutonomousVmClusterMaintenanceWindowList <a name="DatabaseAutonomousVmClusterMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousVmClusterMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousVmClusterMaintenanceWindowMonthsList <a name="DatabaseAutonomousVmClusterMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference <a name="DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonths">DatabaseAutonomousVmClusterMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousVmClusterMaintenanceWindowMonths
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonths">DatabaseAutonomousVmClusterMaintenanceWindowMonths</a>

---


### DatabaseAutonomousVmClusterMaintenanceWindowOutputReference <a name="DatabaseAutonomousVmClusterMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList">DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList">DatabaseAutonomousVmClusterMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.skipRu">skip_ru</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindow">DatabaseAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList">DatabaseAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a>

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```python
months: DatabaseAutonomousVmClusterMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowMonthsList">DatabaseAutonomousVmClusterMaintenanceWindowMonthsList</a>

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `skip_ru`<sup>Required</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.skipRu"></a>

```python
skip_ru: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousVmClusterMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterMaintenanceWindow">DatabaseAutonomousVmClusterMaintenanceWindow</a>

---


### DatabaseAutonomousVmClusterTimeoutsOutputReference <a name="DatabaseAutonomousVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_vm_cluster

databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts">DatabaseAutonomousVmClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmCluster.DatabaseAutonomousVmClusterTimeouts">DatabaseAutonomousVmClusterTimeouts</a>]

---



