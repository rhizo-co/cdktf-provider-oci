# `globallyDistributedDatabaseShardedDatabase` Submodule <a name="`globallyDistributedDatabaseShardedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GloballyDistributedDatabaseShardedDatabase <a name="GloballyDistributedDatabaseShardedDatabase" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database oci_globally_distributed_database_sharded_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabase;

GloballyDistributedDatabaseShardedDatabase.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .catalogDetails(IResolvable)
    .catalogDetails(java.util.List<GloballyDistributedDatabaseShardedDatabaseCatalogDetails>)
    .characterSet(java.lang.String)
    .compartmentId(java.lang.String)
    .dbDeploymentType(java.lang.String)
    .dbVersion(java.lang.String)
    .dbWorkload(java.lang.String)
    .displayName(java.lang.String)
    .listenerPort(java.lang.Number)
    .listenerPortTls(java.lang.Number)
    .ncharacterSet(java.lang.String)
    .onsPortLocal(java.lang.Number)
    .onsPortRemote(java.lang.Number)
    .prefix(java.lang.String)
    .shardDetails(IResolvable)
    .shardDetails(java.util.List<GloballyDistributedDatabaseShardedDatabaseShardDetails>)
    .shardingMethod(java.lang.String)
//  .caSignedCertificate(java.lang.String)
//  .chunks(java.lang.Number)
//  .clusterCertificateCommonName(java.lang.String)
//  .configureGsmsTrigger(java.lang.Number)
//  .configureGsmsTriggerIsLatestGsmImage(java.lang.Boolean)
//  .configureGsmsTriggerIsLatestGsmImage(IResolvable)
//  .configureGsmsTriggerOldGsmNames(java.util.List<java.lang.String>)
//  .configureShardingTrigger(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .downloadGsmCertificateSigningRequestTrigger(java.lang.Number)
//  .fetchConnectionStringTrigger(java.lang.Number)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .generateGsmCertificateSigningRequestTrigger(java.lang.Number)
//  .generateWalletPassword(java.lang.String)
//  .generateWalletTrigger(java.lang.Number)
//  .id(java.lang.String)
//  .patchOperations(IResolvable)
//  .patchOperations(java.util.List<GloballyDistributedDatabaseShardedDatabasePatchOperations>)
//  .replicationFactor(java.lang.Number)
//  .replicationMethod(java.lang.String)
//  .replicationUnit(java.lang.Number)
//  .startDatabaseTrigger(java.lang.Number)
//  .stopDatabaseTrigger(java.lang.Number)
//  .timeouts(GloballyDistributedDatabaseShardedDatabaseTimeouts)
//  .uploadSignedCertificateAndGenerateWalletTrigger(java.lang.Number)
//  .validateNetworkTrigger(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.catalogDetails">catalogDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>></code> | catalog_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#character_set GloballyDistributedDatabaseShardedDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compartment_id GloballyDistributedDatabaseShardedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.dbDeploymentType">dbDeploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_deployment_type GloballyDistributedDatabaseShardedDatabase#db_deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_version GloballyDistributedDatabaseShardedDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_workload GloballyDistributedDatabaseShardedDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#display_name GloballyDistributedDatabaseShardedDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port GloballyDistributedDatabaseShardedDatabase#listener_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.listenerPortTls">listenerPortTls</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port_tls GloballyDistributedDatabaseShardedDatabase#listener_port_tls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ncharacter_set GloballyDistributedDatabaseShardedDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.onsPortLocal">onsPortLocal</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_local GloballyDistributedDatabaseShardedDatabase#ons_port_local}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.onsPortRemote">onsPortRemote</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_remote GloballyDistributedDatabaseShardedDatabase#ons_port_remote}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#prefix GloballyDistributedDatabaseShardedDatabase#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.shardDetails">shardDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>></code> | shard_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.shardingMethod">shardingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#sharding_method GloballyDistributedDatabaseShardedDatabase#sharding_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.caSignedCertificate">caSignedCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ca_signed_certificate GloballyDistributedDatabaseShardedDatabase#ca_signed_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.chunks">chunks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#chunks GloballyDistributedDatabaseShardedDatabase#chunks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.clusterCertificateCommonName">clusterCertificateCommonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cluster_certificate_common_name GloballyDistributedDatabaseShardedDatabase#cluster_certificate_common_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.configureGsmsTrigger">configureGsmsTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.configureGsmsTriggerIsLatestGsmImage">configureGsmsTriggerIsLatestGsmImage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_is_latest_gsm_image GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_is_latest_gsm_image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.configureGsmsTriggerOldGsmNames">configureGsmsTriggerOldGsmNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_old_gsm_names GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_old_gsm_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.configureShardingTrigger">configureShardingTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_sharding_trigger GloballyDistributedDatabaseShardedDatabase#configure_sharding_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#defined_tags GloballyDistributedDatabaseShardedDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.downloadGsmCertificateSigningRequestTrigger">downloadGsmCertificateSigningRequestTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#download_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#download_gsm_certificate_signing_request_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.fetchConnectionStringTrigger">fetchConnectionStringTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#get_connection_string_trigger GloballyDistributedDatabaseShardedDatabase#get_connection_string_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#freeform_tags GloballyDistributedDatabaseShardedDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.generateGsmCertificateSigningRequestTrigger">generateGsmCertificateSigningRequestTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#generate_gsm_certificate_signing_request_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.generateWalletPassword">generateWalletPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_password GloballyDistributedDatabaseShardedDatabase#generate_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.generateWalletTrigger">generateWalletTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#generate_wallet_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#id GloballyDistributedDatabaseShardedDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.patchOperations">patchOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>></code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_factor GloballyDistributedDatabaseShardedDatabase#replication_factor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.replicationMethod">replicationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_method GloballyDistributedDatabaseShardedDatabase#replication_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.replicationUnit">replicationUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_unit GloballyDistributedDatabaseShardedDatabase#replication_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.startDatabaseTrigger">startDatabaseTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#start_database_trigger GloballyDistributedDatabaseShardedDatabase#start_database_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.stopDatabaseTrigger">stopDatabaseTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#stop_database_trigger GloballyDistributedDatabaseShardedDatabase#stop_database_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.uploadSignedCertificateAndGenerateWalletTrigger">uploadSignedCertificateAndGenerateWalletTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#upload_signed_certificate_and_generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#upload_signed_certificate_and_generate_wallet_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.validateNetworkTrigger">validateNetworkTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#validate_network_trigger GloballyDistributedDatabaseShardedDatabase#validate_network_trigger}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogDetails`<sup>Required</sup> <a name="catalogDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.catalogDetails"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>>

catalog_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#catalog_details GloballyDistributedDatabaseShardedDatabase#catalog_details}

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.characterSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#character_set GloballyDistributedDatabaseShardedDatabase#character_set}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compartment_id GloballyDistributedDatabaseShardedDatabase#compartment_id}.

---

##### `dbDeploymentType`<sup>Required</sup> <a name="dbDeploymentType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.dbDeploymentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_deployment_type GloballyDistributedDatabaseShardedDatabase#db_deployment_type}.

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.dbVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_version GloballyDistributedDatabaseShardedDatabase#db_version}.

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.dbWorkload"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_workload GloballyDistributedDatabaseShardedDatabase#db_workload}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#display_name GloballyDistributedDatabaseShardedDatabase#display_name}.

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.listenerPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port GloballyDistributedDatabaseShardedDatabase#listener_port}.

---

##### `listenerPortTls`<sup>Required</sup> <a name="listenerPortTls" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.listenerPortTls"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port_tls GloballyDistributedDatabaseShardedDatabase#listener_port_tls}.

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.ncharacterSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ncharacter_set GloballyDistributedDatabaseShardedDatabase#ncharacter_set}.

---

##### `onsPortLocal`<sup>Required</sup> <a name="onsPortLocal" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.onsPortLocal"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_local GloballyDistributedDatabaseShardedDatabase#ons_port_local}.

---

##### `onsPortRemote`<sup>Required</sup> <a name="onsPortRemote" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.onsPortRemote"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_remote GloballyDistributedDatabaseShardedDatabase#ons_port_remote}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.prefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#prefix GloballyDistributedDatabaseShardedDatabase#prefix}.

---

##### `shardDetails`<sup>Required</sup> <a name="shardDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.shardDetails"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>>

shard_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#shard_details GloballyDistributedDatabaseShardedDatabase#shard_details}

---

##### `shardingMethod`<sup>Required</sup> <a name="shardingMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.shardingMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#sharding_method GloballyDistributedDatabaseShardedDatabase#sharding_method}.

---

##### `caSignedCertificate`<sup>Optional</sup> <a name="caSignedCertificate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.caSignedCertificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ca_signed_certificate GloballyDistributedDatabaseShardedDatabase#ca_signed_certificate}.

---

##### `chunks`<sup>Optional</sup> <a name="chunks" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.chunks"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#chunks GloballyDistributedDatabaseShardedDatabase#chunks}.

---

##### `clusterCertificateCommonName`<sup>Optional</sup> <a name="clusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.clusterCertificateCommonName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cluster_certificate_common_name GloballyDistributedDatabaseShardedDatabase#cluster_certificate_common_name}.

---

##### `configureGsmsTrigger`<sup>Optional</sup> <a name="configureGsmsTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.configureGsmsTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger}.

---

##### `configureGsmsTriggerIsLatestGsmImage`<sup>Optional</sup> <a name="configureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.configureGsmsTriggerIsLatestGsmImage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_is_latest_gsm_image GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_is_latest_gsm_image}.

---

##### `configureGsmsTriggerOldGsmNames`<sup>Optional</sup> <a name="configureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.configureGsmsTriggerOldGsmNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_old_gsm_names GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_old_gsm_names}.

---

##### `configureShardingTrigger`<sup>Optional</sup> <a name="configureShardingTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.configureShardingTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_sharding_trigger GloballyDistributedDatabaseShardedDatabase#configure_sharding_trigger}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#defined_tags GloballyDistributedDatabaseShardedDatabase#defined_tags}.

---

##### `downloadGsmCertificateSigningRequestTrigger`<sup>Optional</sup> <a name="downloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.downloadGsmCertificateSigningRequestTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#download_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#download_gsm_certificate_signing_request_trigger}.

---

##### `fetchConnectionStringTrigger`<sup>Optional</sup> <a name="fetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.fetchConnectionStringTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#get_connection_string_trigger GloballyDistributedDatabaseShardedDatabase#get_connection_string_trigger}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#freeform_tags GloballyDistributedDatabaseShardedDatabase#freeform_tags}.

---

##### `generateGsmCertificateSigningRequestTrigger`<sup>Optional</sup> <a name="generateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.generateGsmCertificateSigningRequestTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#generate_gsm_certificate_signing_request_trigger}.

---

##### `generateWalletPassword`<sup>Optional</sup> <a name="generateWalletPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.generateWalletPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_password GloballyDistributedDatabaseShardedDatabase#generate_wallet_password}.

---

##### `generateWalletTrigger`<sup>Optional</sup> <a name="generateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.generateWalletTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#generate_wallet_trigger}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#id GloballyDistributedDatabaseShardedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.patchOperations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>>

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#patch_operations GloballyDistributedDatabaseShardedDatabase#patch_operations}

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.replicationFactor"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_factor GloballyDistributedDatabaseShardedDatabase#replication_factor}.

---

##### `replicationMethod`<sup>Optional</sup> <a name="replicationMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.replicationMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_method GloballyDistributedDatabaseShardedDatabase#replication_method}.

---

##### `replicationUnit`<sup>Optional</sup> <a name="replicationUnit" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.replicationUnit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_unit GloballyDistributedDatabaseShardedDatabase#replication_unit}.

---

##### `startDatabaseTrigger`<sup>Optional</sup> <a name="startDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.startDatabaseTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#start_database_trigger GloballyDistributedDatabaseShardedDatabase#start_database_trigger}.

---

##### `stopDatabaseTrigger`<sup>Optional</sup> <a name="stopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.stopDatabaseTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#stop_database_trigger GloballyDistributedDatabaseShardedDatabase#stop_database_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#timeouts GloballyDistributedDatabaseShardedDatabase#timeouts}

---

##### `uploadSignedCertificateAndGenerateWalletTrigger`<sup>Optional</sup> <a name="uploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.uploadSignedCertificateAndGenerateWalletTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#upload_signed_certificate_and_generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#upload_signed_certificate_and_generate_wallet_trigger}.

---

##### `validateNetworkTrigger`<sup>Optional</sup> <a name="validateNetworkTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.Initializer.parameter.validateNetworkTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#validate_network_trigger GloballyDistributedDatabaseShardedDatabase#validate_network_trigger}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putCatalogDetails">putCatalogDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putPatchOperations">putPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putShardDetails">putShardDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetCaSignedCertificate">resetCaSignedCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetChunks">resetChunks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetClusterCertificateCommonName">resetClusterCertificateCommonName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTrigger">resetConfigureGsmsTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTriggerIsLatestGsmImage">resetConfigureGsmsTriggerIsLatestGsmImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTriggerOldGsmNames">resetConfigureGsmsTriggerOldGsmNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureShardingTrigger">resetConfigureShardingTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetDownloadGsmCertificateSigningRequestTrigger">resetDownloadGsmCertificateSigningRequestTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetFetchConnectionStringTrigger">resetFetchConnectionStringTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateGsmCertificateSigningRequestTrigger">resetGenerateGsmCertificateSigningRequestTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateWalletPassword">resetGenerateWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateWalletTrigger">resetGenerateWalletTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetPatchOperations">resetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationMethod">resetReplicationMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationUnit">resetReplicationUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetStartDatabaseTrigger">resetStartDatabaseTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetStopDatabaseTrigger">resetStopDatabaseTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetUploadSignedCertificateAndGenerateWalletTrigger">resetUploadSignedCertificateAndGenerateWalletTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetValidateNetworkTrigger">resetValidateNetworkTrigger</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCatalogDetails` <a name="putCatalogDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putCatalogDetails"></a>

```java
public void putCatalogDetails(IResolvable OR java.util.List<GloballyDistributedDatabaseShardedDatabaseCatalogDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putCatalogDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>>

---

##### `putPatchOperations` <a name="putPatchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putPatchOperations"></a>

```java
public void putPatchOperations(IResolvable OR java.util.List<GloballyDistributedDatabaseShardedDatabasePatchOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putPatchOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>>

---

##### `putShardDetails` <a name="putShardDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putShardDetails"></a>

```java
public void putShardDetails(IResolvable OR java.util.List<GloballyDistributedDatabaseShardedDatabaseShardDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putShardDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putTimeouts"></a>

```java
public void putTimeouts(GloballyDistributedDatabaseShardedDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a>

---

##### `resetCaSignedCertificate` <a name="resetCaSignedCertificate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetCaSignedCertificate"></a>

```java
public void resetCaSignedCertificate()
```

##### `resetChunks` <a name="resetChunks" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetChunks"></a>

```java
public void resetChunks()
```

##### `resetClusterCertificateCommonName` <a name="resetClusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetClusterCertificateCommonName"></a>

```java
public void resetClusterCertificateCommonName()
```

##### `resetConfigureGsmsTrigger` <a name="resetConfigureGsmsTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTrigger"></a>

```java
public void resetConfigureGsmsTrigger()
```

##### `resetConfigureGsmsTriggerIsLatestGsmImage` <a name="resetConfigureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTriggerIsLatestGsmImage"></a>

```java
public void resetConfigureGsmsTriggerIsLatestGsmImage()
```

##### `resetConfigureGsmsTriggerOldGsmNames` <a name="resetConfigureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureGsmsTriggerOldGsmNames"></a>

```java
public void resetConfigureGsmsTriggerOldGsmNames()
```

##### `resetConfigureShardingTrigger` <a name="resetConfigureShardingTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetConfigureShardingTrigger"></a>

```java
public void resetConfigureShardingTrigger()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDownloadGsmCertificateSigningRequestTrigger` <a name="resetDownloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetDownloadGsmCertificateSigningRequestTrigger"></a>

```java
public void resetDownloadGsmCertificateSigningRequestTrigger()
```

##### `resetFetchConnectionStringTrigger` <a name="resetFetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetFetchConnectionStringTrigger"></a>

```java
public void resetFetchConnectionStringTrigger()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetGenerateGsmCertificateSigningRequestTrigger` <a name="resetGenerateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateGsmCertificateSigningRequestTrigger"></a>

```java
public void resetGenerateGsmCertificateSigningRequestTrigger()
```

##### `resetGenerateWalletPassword` <a name="resetGenerateWalletPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateWalletPassword"></a>

```java
public void resetGenerateWalletPassword()
```

##### `resetGenerateWalletTrigger` <a name="resetGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetGenerateWalletTrigger"></a>

```java
public void resetGenerateWalletTrigger()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetPatchOperations` <a name="resetPatchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetPatchOperations"></a>

```java
public void resetPatchOperations()
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationFactor"></a>

```java
public void resetReplicationFactor()
```

##### `resetReplicationMethod` <a name="resetReplicationMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationMethod"></a>

```java
public void resetReplicationMethod()
```

##### `resetReplicationUnit` <a name="resetReplicationUnit" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetReplicationUnit"></a>

```java
public void resetReplicationUnit()
```

##### `resetStartDatabaseTrigger` <a name="resetStartDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetStartDatabaseTrigger"></a>

```java
public void resetStartDatabaseTrigger()
```

##### `resetStopDatabaseTrigger` <a name="resetStopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetStopDatabaseTrigger"></a>

```java
public void resetStopDatabaseTrigger()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUploadSignedCertificateAndGenerateWalletTrigger` <a name="resetUploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetUploadSignedCertificateAndGenerateWalletTrigger"></a>

```java
public void resetUploadSignedCertificateAndGenerateWalletTrigger()
```

##### `resetValidateNetworkTrigger` <a name="resetValidateNetworkTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.resetValidateNetworkTrigger"></a>

```java
public void resetValidateNetworkTrigger()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabase;

GloballyDistributedDatabaseShardedDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabase;

GloballyDistributedDatabaseShardedDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabase;

GloballyDistributedDatabaseShardedDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabase;

GloballyDistributedDatabaseShardedDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GloballyDistributedDatabaseShardedDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GloballyDistributedDatabaseShardedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GloballyDistributedDatabaseShardedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GloballyDistributedDatabaseShardedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.catalogDetails">catalogDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList">GloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.gsms">gsms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList">GloballyDistributedDatabaseShardedDatabaseGsmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList">GloballyDistributedDatabaseShardedDatabasePatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.privateEndpoint">privateEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardDetails">shardDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList">GloballyDistributedDatabaseShardedDatabaseShardDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId">shardedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference">GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.caSignedCertificateInput">caSignedCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.catalogDetailsInput">catalogDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.characterSetInput">characterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.chunksInput">chunksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonNameInput">clusterCertificateCommonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerInput">configureGsmsTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImageInput">configureGsmsTriggerIsLatestGsmImageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNamesInput">configureGsmsTriggerOldGsmNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureShardingTriggerInput">configureShardingTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbDeploymentTypeInput">dbDeploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTriggerInput">downloadGsmCertificateSigningRequestTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTriggerInput">fetchConnectionStringTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTriggerInput">generateGsmCertificateSigningRequestTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletPasswordInput">generateWalletPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletTriggerInput">generateWalletTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortInput">listenerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortTlsInput">listenerPortTlsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.ncharacterSetInput">ncharacterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortLocalInput">onsPortLocalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortRemoteInput">onsPortRemoteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.patchOperationsInput">patchOperationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationFactorInput">replicationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationMethodInput">replicationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationUnitInput">replicationUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardDetailsInput">shardDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardingMethodInput">shardingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.startDatabaseTriggerInput">startDatabaseTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTriggerInput">stopDatabaseTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTriggerInput">uploadSignedCertificateAndGenerateWalletTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.validateNetworkTriggerInput">validateNetworkTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate">caSignedCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.chunks">chunks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName">clusterCertificateCommonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger">configureGsmsTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage">configureGsmsTriggerIsLatestGsmImage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames">configureGsmsTriggerOldGsmNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger">configureShardingTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType">dbDeploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger">downloadGsmCertificateSigningRequestTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger">fetchConnectionStringTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger">generateGsmCertificateSigningRequestTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword">generateWalletPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger">generateWalletTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortTls">listenerPortTls</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortLocal">onsPortLocal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortRemote">onsPortRemote</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationMethod">replicationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationUnit">replicationUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardingMethod">shardingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger">startDatabaseTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger">stopDatabaseTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger">uploadSignedCertificateAndGenerateWalletTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger">validateNetworkTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogDetails`<sup>Required</sup> <a name="catalogDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.catalogDetails"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList getCatalogDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a>

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.connectionStrings"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList">GloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a>

---

##### `gsms`<sup>Required</sup> <a name="gsms" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.gsms"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseGsmsList getGsms();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList">GloballyDistributedDatabaseShardedDatabaseGsmsList</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails"></a>

```java
public java.lang.String getLifecycleStateDetails();
```

- *Type:* java.lang.String

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.patchOperations"></a>

```java
public GloballyDistributedDatabaseShardedDatabasePatchOperationsList getPatchOperations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList">GloballyDistributedDatabaseShardedDatabasePatchOperationsList</a>

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.privateEndpoint"></a>

```java
public java.lang.String getPrivateEndpoint();
```

- *Type:* java.lang.String

---

##### `shardDetails`<sup>Required</sup> <a name="shardDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardDetails"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseShardDetailsList getShardDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList">GloballyDistributedDatabaseShardedDatabaseShardDetailsList</a>

---

##### `shardedDatabaseId`<sup>Required</sup> <a name="shardedDatabaseId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId"></a>

```java
public java.lang.String getShardedDatabaseId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeouts"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference">GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `caSignedCertificateInput`<sup>Optional</sup> <a name="caSignedCertificateInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.caSignedCertificateInput"></a>

```java
public java.lang.String getCaSignedCertificateInput();
```

- *Type:* java.lang.String

---

##### `catalogDetailsInput`<sup>Optional</sup> <a name="catalogDetailsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.catalogDetailsInput"></a>

```java
public java.lang.Object getCatalogDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>>

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.characterSetInput"></a>

```java
public java.lang.String getCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `chunksInput`<sup>Optional</sup> <a name="chunksInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.chunksInput"></a>

```java
public java.lang.Number getChunksInput();
```

- *Type:* java.lang.Number

---

##### `clusterCertificateCommonNameInput`<sup>Optional</sup> <a name="clusterCertificateCommonNameInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonNameInput"></a>

```java
public java.lang.String getClusterCertificateCommonNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configureGsmsTriggerInput`<sup>Optional</sup> <a name="configureGsmsTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerInput"></a>

```java
public java.lang.Number getConfigureGsmsTriggerInput();
```

- *Type:* java.lang.Number

---

##### `configureGsmsTriggerIsLatestGsmImageInput`<sup>Optional</sup> <a name="configureGsmsTriggerIsLatestGsmImageInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImageInput"></a>

```java
public java.lang.Object getConfigureGsmsTriggerIsLatestGsmImageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configureGsmsTriggerOldGsmNamesInput`<sup>Optional</sup> <a name="configureGsmsTriggerOldGsmNamesInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNamesInput"></a>

```java
public java.util.List<java.lang.String> getConfigureGsmsTriggerOldGsmNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configureShardingTriggerInput`<sup>Optional</sup> <a name="configureShardingTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureShardingTriggerInput"></a>

```java
public java.lang.Number getConfigureShardingTriggerInput();
```

- *Type:* java.lang.Number

---

##### `dbDeploymentTypeInput`<sup>Optional</sup> <a name="dbDeploymentTypeInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbDeploymentTypeInput"></a>

```java
public java.lang.String getDbDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbWorkloadInput"></a>

```java
public java.lang.String getDbWorkloadInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `downloadGsmCertificateSigningRequestTriggerInput`<sup>Optional</sup> <a name="downloadGsmCertificateSigningRequestTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTriggerInput"></a>

```java
public java.lang.Number getDownloadGsmCertificateSigningRequestTriggerInput();
```

- *Type:* java.lang.Number

---

##### `fetchConnectionStringTriggerInput`<sup>Optional</sup> <a name="fetchConnectionStringTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTriggerInput"></a>

```java
public java.lang.Number getFetchConnectionStringTriggerInput();
```

- *Type:* java.lang.Number

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateGsmCertificateSigningRequestTriggerInput`<sup>Optional</sup> <a name="generateGsmCertificateSigningRequestTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTriggerInput"></a>

```java
public java.lang.Number getGenerateGsmCertificateSigningRequestTriggerInput();
```

- *Type:* java.lang.Number

---

##### `generateWalletPasswordInput`<sup>Optional</sup> <a name="generateWalletPasswordInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletPasswordInput"></a>

```java
public java.lang.String getGenerateWalletPasswordInput();
```

- *Type:* java.lang.String

---

##### `generateWalletTriggerInput`<sup>Optional</sup> <a name="generateWalletTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletTriggerInput"></a>

```java
public java.lang.Number getGenerateWalletTriggerInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listenerPortInput`<sup>Optional</sup> <a name="listenerPortInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortInput"></a>

```java
public java.lang.Number getListenerPortInput();
```

- *Type:* java.lang.Number

---

##### `listenerPortTlsInput`<sup>Optional</sup> <a name="listenerPortTlsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortTlsInput"></a>

```java
public java.lang.Number getListenerPortTlsInput();
```

- *Type:* java.lang.Number

---

##### `ncharacterSetInput`<sup>Optional</sup> <a name="ncharacterSetInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.ncharacterSetInput"></a>

```java
public java.lang.String getNcharacterSetInput();
```

- *Type:* java.lang.String

---

##### `onsPortLocalInput`<sup>Optional</sup> <a name="onsPortLocalInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortLocalInput"></a>

```java
public java.lang.Number getOnsPortLocalInput();
```

- *Type:* java.lang.Number

---

##### `onsPortRemoteInput`<sup>Optional</sup> <a name="onsPortRemoteInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortRemoteInput"></a>

```java
public java.lang.Number getOnsPortRemoteInput();
```

- *Type:* java.lang.Number

---

##### `patchOperationsInput`<sup>Optional</sup> <a name="patchOperationsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.patchOperationsInput"></a>

```java
public java.lang.Object getPatchOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationFactorInput"></a>

```java
public java.lang.Number getReplicationFactorInput();
```

- *Type:* java.lang.Number

---

##### `replicationMethodInput`<sup>Optional</sup> <a name="replicationMethodInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationMethodInput"></a>

```java
public java.lang.String getReplicationMethodInput();
```

- *Type:* java.lang.String

---

##### `replicationUnitInput`<sup>Optional</sup> <a name="replicationUnitInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationUnitInput"></a>

```java
public java.lang.Number getReplicationUnitInput();
```

- *Type:* java.lang.Number

---

##### `shardDetailsInput`<sup>Optional</sup> <a name="shardDetailsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardDetailsInput"></a>

```java
public java.lang.Object getShardDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>>

---

##### `shardingMethodInput`<sup>Optional</sup> <a name="shardingMethodInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardingMethodInput"></a>

```java
public java.lang.String getShardingMethodInput();
```

- *Type:* java.lang.String

---

##### `startDatabaseTriggerInput`<sup>Optional</sup> <a name="startDatabaseTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.startDatabaseTriggerInput"></a>

```java
public java.lang.Number getStartDatabaseTriggerInput();
```

- *Type:* java.lang.Number

---

##### `stopDatabaseTriggerInput`<sup>Optional</sup> <a name="stopDatabaseTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTriggerInput"></a>

```java
public java.lang.Number getStopDatabaseTriggerInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a>

---

##### `uploadSignedCertificateAndGenerateWalletTriggerInput`<sup>Optional</sup> <a name="uploadSignedCertificateAndGenerateWalletTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTriggerInput"></a>

```java
public java.lang.Number getUploadSignedCertificateAndGenerateWalletTriggerInput();
```

- *Type:* java.lang.Number

---

##### `validateNetworkTriggerInput`<sup>Optional</sup> <a name="validateNetworkTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.validateNetworkTriggerInput"></a>

```java
public java.lang.Number getValidateNetworkTriggerInput();
```

- *Type:* java.lang.Number

---

##### `caSignedCertificate`<sup>Required</sup> <a name="caSignedCertificate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate"></a>

```java
public java.lang.String getCaSignedCertificate();
```

- *Type:* java.lang.String

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `chunks`<sup>Required</sup> <a name="chunks" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.chunks"></a>

```java
public java.lang.Number getChunks();
```

- *Type:* java.lang.Number

---

##### `clusterCertificateCommonName`<sup>Required</sup> <a name="clusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName"></a>

```java
public java.lang.String getClusterCertificateCommonName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configureGsmsTrigger`<sup>Required</sup> <a name="configureGsmsTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger"></a>

```java
public java.lang.Number getConfigureGsmsTrigger();
```

- *Type:* java.lang.Number

---

##### `configureGsmsTriggerIsLatestGsmImage`<sup>Required</sup> <a name="configureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage"></a>

```java
public java.lang.Object getConfigureGsmsTriggerIsLatestGsmImage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configureGsmsTriggerOldGsmNames`<sup>Required</sup> <a name="configureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames"></a>

```java
public java.util.List<java.lang.String> getConfigureGsmsTriggerOldGsmNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configureShardingTrigger`<sup>Required</sup> <a name="configureShardingTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger"></a>

```java
public java.lang.Number getConfigureShardingTrigger();
```

- *Type:* java.lang.Number

---

##### `dbDeploymentType`<sup>Required</sup> <a name="dbDeploymentType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType"></a>

```java
public java.lang.String getDbDeploymentType();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `downloadGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="downloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger"></a>

```java
public java.lang.Number getDownloadGsmCertificateSigningRequestTrigger();
```

- *Type:* java.lang.Number

---

##### `fetchConnectionStringTrigger`<sup>Required</sup> <a name="fetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger"></a>

```java
public java.lang.Number getFetchConnectionStringTrigger();
```

- *Type:* java.lang.Number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="generateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger"></a>

```java
public java.lang.Number getGenerateGsmCertificateSigningRequestTrigger();
```

- *Type:* java.lang.Number

---

##### `generateWalletPassword`<sup>Required</sup> <a name="generateWalletPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword"></a>

```java
public java.lang.String getGenerateWalletPassword();
```

- *Type:* java.lang.String

---

##### `generateWalletTrigger`<sup>Required</sup> <a name="generateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger"></a>

```java
public java.lang.Number getGenerateWalletTrigger();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

---

##### `listenerPortTls`<sup>Required</sup> <a name="listenerPortTls" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.listenerPortTls"></a>

```java
public java.lang.Number getListenerPortTls();
```

- *Type:* java.lang.Number

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

---

##### `onsPortLocal`<sup>Required</sup> <a name="onsPortLocal" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortLocal"></a>

```java
public java.lang.Number getOnsPortLocal();
```

- *Type:* java.lang.Number

---

##### `onsPortRemote`<sup>Required</sup> <a name="onsPortRemote" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.onsPortRemote"></a>

```java
public java.lang.Number getOnsPortRemote();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

---

##### `replicationMethod`<sup>Required</sup> <a name="replicationMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationMethod"></a>

```java
public java.lang.String getReplicationMethod();
```

- *Type:* java.lang.String

---

##### `replicationUnit`<sup>Required</sup> <a name="replicationUnit" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.replicationUnit"></a>

```java
public java.lang.Number getReplicationUnit();
```

- *Type:* java.lang.Number

---

##### `shardingMethod`<sup>Required</sup> <a name="shardingMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.shardingMethod"></a>

```java
public java.lang.String getShardingMethod();
```

- *Type:* java.lang.String

---

##### `startDatabaseTrigger`<sup>Required</sup> <a name="startDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger"></a>

```java
public java.lang.Number getStartDatabaseTrigger();
```

- *Type:* java.lang.Number

---

##### `stopDatabaseTrigger`<sup>Required</sup> <a name="stopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger"></a>

```java
public java.lang.Number getStopDatabaseTrigger();
```

- *Type:* java.lang.Number

---

##### `uploadSignedCertificateAndGenerateWalletTrigger`<sup>Required</sup> <a name="uploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger"></a>

```java
public java.lang.Number getUploadSignedCertificateAndGenerateWalletTrigger();
```

- *Type:* java.lang.Number

---

##### `validateNetworkTrigger`<sup>Required</sup> <a name="validateNetworkTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger"></a>

```java
public java.lang.Number getValidateNetworkTrigger();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GloballyDistributedDatabaseShardedDatabaseCatalogDetails <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseCatalogDetails;

GloballyDistributedDatabaseShardedDatabaseCatalogDetails.builder()
    .adminPassword(java.lang.String)
    .cloudAutonomousVmClusterId(java.lang.String)
    .computeCount(java.lang.Number)
    .dataStorageSizeInGbs(java.lang.Number)
    .isAutoScalingEnabled(java.lang.Boolean)
    .isAutoScalingEnabled(IResolvable)
//  .encryptionKeyDetails(GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails)
//  .peerCloudAutonomousVmClusterId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.encryptionKeyDetails">encryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a></code> | encryption_key_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}. |

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}.

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.cloudAutonomousVmClusterId"></a>

```java
public java.lang.String getCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}.

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}.

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.dataStorageSizeInGbs"></a>

```java
public java.lang.Number getDataStorageSizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}.

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}.

---

##### `encryptionKeyDetails`<sup>Optional</sup> <a name="encryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.encryptionKeyDetails"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails getEncryptionKeyDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

encryption_key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#encryption_key_details GloballyDistributedDatabaseShardedDatabase#encryption_key_details}

---

##### `peerCloudAutonomousVmClusterId`<sup>Optional</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails.property.peerCloudAutonomousVmClusterId"></a>

```java
public java.lang.String getPeerCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}.

---

### GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails;

GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.builder()
    .kmsKeyId(java.lang.String)
    .vaultId(java.lang.String)
//  .kmsKeyVersionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}. |

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}.

---

### GloballyDistributedDatabaseShardedDatabaseConfig <a name="GloballyDistributedDatabaseShardedDatabaseConfig" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseConfig;

GloballyDistributedDatabaseShardedDatabaseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .catalogDetails(IResolvable)
    .catalogDetails(java.util.List<GloballyDistributedDatabaseShardedDatabaseCatalogDetails>)
    .characterSet(java.lang.String)
    .compartmentId(java.lang.String)
    .dbDeploymentType(java.lang.String)
    .dbVersion(java.lang.String)
    .dbWorkload(java.lang.String)
    .displayName(java.lang.String)
    .listenerPort(java.lang.Number)
    .listenerPortTls(java.lang.Number)
    .ncharacterSet(java.lang.String)
    .onsPortLocal(java.lang.Number)
    .onsPortRemote(java.lang.Number)
    .prefix(java.lang.String)
    .shardDetails(IResolvable)
    .shardDetails(java.util.List<GloballyDistributedDatabaseShardedDatabaseShardDetails>)
    .shardingMethod(java.lang.String)
//  .caSignedCertificate(java.lang.String)
//  .chunks(java.lang.Number)
//  .clusterCertificateCommonName(java.lang.String)
//  .configureGsmsTrigger(java.lang.Number)
//  .configureGsmsTriggerIsLatestGsmImage(java.lang.Boolean)
//  .configureGsmsTriggerIsLatestGsmImage(IResolvable)
//  .configureGsmsTriggerOldGsmNames(java.util.List<java.lang.String>)
//  .configureShardingTrigger(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .downloadGsmCertificateSigningRequestTrigger(java.lang.Number)
//  .fetchConnectionStringTrigger(java.lang.Number)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .generateGsmCertificateSigningRequestTrigger(java.lang.Number)
//  .generateWalletPassword(java.lang.String)
//  .generateWalletTrigger(java.lang.Number)
//  .id(java.lang.String)
//  .patchOperations(IResolvable)
//  .patchOperations(java.util.List<GloballyDistributedDatabaseShardedDatabasePatchOperations>)
//  .replicationFactor(java.lang.Number)
//  .replicationMethod(java.lang.String)
//  .replicationUnit(java.lang.Number)
//  .startDatabaseTrigger(java.lang.Number)
//  .stopDatabaseTrigger(java.lang.Number)
//  .timeouts(GloballyDistributedDatabaseShardedDatabaseTimeouts)
//  .uploadSignedCertificateAndGenerateWalletTrigger(java.lang.Number)
//  .validateNetworkTrigger(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.catalogDetails">catalogDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>></code> | catalog_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#character_set GloballyDistributedDatabaseShardedDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compartment_id GloballyDistributedDatabaseShardedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbDeploymentType">dbDeploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_deployment_type GloballyDistributedDatabaseShardedDatabase#db_deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_version GloballyDistributedDatabaseShardedDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_workload GloballyDistributedDatabaseShardedDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#display_name GloballyDistributedDatabaseShardedDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port GloballyDistributedDatabaseShardedDatabase#listener_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.listenerPortTls">listenerPortTls</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port_tls GloballyDistributedDatabaseShardedDatabase#listener_port_tls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ncharacter_set GloballyDistributedDatabaseShardedDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.onsPortLocal">onsPortLocal</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_local GloballyDistributedDatabaseShardedDatabase#ons_port_local}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.onsPortRemote">onsPortRemote</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_remote GloballyDistributedDatabaseShardedDatabase#ons_port_remote}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#prefix GloballyDistributedDatabaseShardedDatabase#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.shardDetails">shardDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>></code> | shard_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.shardingMethod">shardingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#sharding_method GloballyDistributedDatabaseShardedDatabase#sharding_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.caSignedCertificate">caSignedCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ca_signed_certificate GloballyDistributedDatabaseShardedDatabase#ca_signed_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.chunks">chunks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#chunks GloballyDistributedDatabaseShardedDatabase#chunks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.clusterCertificateCommonName">clusterCertificateCommonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cluster_certificate_common_name GloballyDistributedDatabaseShardedDatabase#cluster_certificate_common_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTrigger">configureGsmsTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTriggerIsLatestGsmImage">configureGsmsTriggerIsLatestGsmImage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_is_latest_gsm_image GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_is_latest_gsm_image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTriggerOldGsmNames">configureGsmsTriggerOldGsmNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_old_gsm_names GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_old_gsm_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureShardingTrigger">configureShardingTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_sharding_trigger GloballyDistributedDatabaseShardedDatabase#configure_sharding_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#defined_tags GloballyDistributedDatabaseShardedDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.downloadGsmCertificateSigningRequestTrigger">downloadGsmCertificateSigningRequestTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#download_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#download_gsm_certificate_signing_request_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.fetchConnectionStringTrigger">fetchConnectionStringTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#get_connection_string_trigger GloballyDistributedDatabaseShardedDatabase#get_connection_string_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#freeform_tags GloballyDistributedDatabaseShardedDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateGsmCertificateSigningRequestTrigger">generateGsmCertificateSigningRequestTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#generate_gsm_certificate_signing_request_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateWalletPassword">generateWalletPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_password GloballyDistributedDatabaseShardedDatabase#generate_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateWalletTrigger">generateWalletTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#generate_wallet_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#id GloballyDistributedDatabaseShardedDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.patchOperations">patchOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>></code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_factor GloballyDistributedDatabaseShardedDatabase#replication_factor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationMethod">replicationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_method GloballyDistributedDatabaseShardedDatabase#replication_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationUnit">replicationUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_unit GloballyDistributedDatabaseShardedDatabase#replication_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.startDatabaseTrigger">startDatabaseTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#start_database_trigger GloballyDistributedDatabaseShardedDatabase#start_database_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.stopDatabaseTrigger">stopDatabaseTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#stop_database_trigger GloballyDistributedDatabaseShardedDatabase#stop_database_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.uploadSignedCertificateAndGenerateWalletTrigger">uploadSignedCertificateAndGenerateWalletTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#upload_signed_certificate_and_generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#upload_signed_certificate_and_generate_wallet_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.validateNetworkTrigger">validateNetworkTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#validate_network_trigger GloballyDistributedDatabaseShardedDatabase#validate_network_trigger}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogDetails`<sup>Required</sup> <a name="catalogDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.catalogDetails"></a>

```java
public java.lang.Object getCatalogDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>>

catalog_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#catalog_details GloballyDistributedDatabaseShardedDatabase#catalog_details}

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#character_set GloballyDistributedDatabaseShardedDatabase#character_set}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compartment_id GloballyDistributedDatabaseShardedDatabase#compartment_id}.

---

##### `dbDeploymentType`<sup>Required</sup> <a name="dbDeploymentType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbDeploymentType"></a>

```java
public java.lang.String getDbDeploymentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_deployment_type GloballyDistributedDatabaseShardedDatabase#db_deployment_type}.

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_version GloballyDistributedDatabaseShardedDatabase#db_version}.

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#db_workload GloballyDistributedDatabaseShardedDatabase#db_workload}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#display_name GloballyDistributedDatabaseShardedDatabase#display_name}.

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port GloballyDistributedDatabaseShardedDatabase#listener_port}.

---

##### `listenerPortTls`<sup>Required</sup> <a name="listenerPortTls" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.listenerPortTls"></a>

```java
public java.lang.Number getListenerPortTls();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#listener_port_tls GloballyDistributedDatabaseShardedDatabase#listener_port_tls}.

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ncharacter_set GloballyDistributedDatabaseShardedDatabase#ncharacter_set}.

---

##### `onsPortLocal`<sup>Required</sup> <a name="onsPortLocal" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.onsPortLocal"></a>

```java
public java.lang.Number getOnsPortLocal();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_local GloballyDistributedDatabaseShardedDatabase#ons_port_local}.

---

##### `onsPortRemote`<sup>Required</sup> <a name="onsPortRemote" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.onsPortRemote"></a>

```java
public java.lang.Number getOnsPortRemote();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ons_port_remote GloballyDistributedDatabaseShardedDatabase#ons_port_remote}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#prefix GloballyDistributedDatabaseShardedDatabase#prefix}.

---

##### `shardDetails`<sup>Required</sup> <a name="shardDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.shardDetails"></a>

```java
public java.lang.Object getShardDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>>

shard_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#shard_details GloballyDistributedDatabaseShardedDatabase#shard_details}

---

##### `shardingMethod`<sup>Required</sup> <a name="shardingMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.shardingMethod"></a>

```java
public java.lang.String getShardingMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#sharding_method GloballyDistributedDatabaseShardedDatabase#sharding_method}.

---

##### `caSignedCertificate`<sup>Optional</sup> <a name="caSignedCertificate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.caSignedCertificate"></a>

```java
public java.lang.String getCaSignedCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#ca_signed_certificate GloballyDistributedDatabaseShardedDatabase#ca_signed_certificate}.

---

##### `chunks`<sup>Optional</sup> <a name="chunks" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.chunks"></a>

```java
public java.lang.Number getChunks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#chunks GloballyDistributedDatabaseShardedDatabase#chunks}.

---

##### `clusterCertificateCommonName`<sup>Optional</sup> <a name="clusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.clusterCertificateCommonName"></a>

```java
public java.lang.String getClusterCertificateCommonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cluster_certificate_common_name GloballyDistributedDatabaseShardedDatabase#cluster_certificate_common_name}.

---

##### `configureGsmsTrigger`<sup>Optional</sup> <a name="configureGsmsTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTrigger"></a>

```java
public java.lang.Number getConfigureGsmsTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger}.

---

##### `configureGsmsTriggerIsLatestGsmImage`<sup>Optional</sup> <a name="configureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTriggerIsLatestGsmImage"></a>

```java
public java.lang.Object getConfigureGsmsTriggerIsLatestGsmImage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_is_latest_gsm_image GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_is_latest_gsm_image}.

---

##### `configureGsmsTriggerOldGsmNames`<sup>Optional</sup> <a name="configureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureGsmsTriggerOldGsmNames"></a>

```java
public java.util.List<java.lang.String> getConfigureGsmsTriggerOldGsmNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_old_gsm_names GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_old_gsm_names}.

---

##### `configureShardingTrigger`<sup>Optional</sup> <a name="configureShardingTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.configureShardingTrigger"></a>

```java
public java.lang.Number getConfigureShardingTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#configure_sharding_trigger GloballyDistributedDatabaseShardedDatabase#configure_sharding_trigger}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#defined_tags GloballyDistributedDatabaseShardedDatabase#defined_tags}.

---

##### `downloadGsmCertificateSigningRequestTrigger`<sup>Optional</sup> <a name="downloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.downloadGsmCertificateSigningRequestTrigger"></a>

```java
public java.lang.Number getDownloadGsmCertificateSigningRequestTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#download_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#download_gsm_certificate_signing_request_trigger}.

---

##### `fetchConnectionStringTrigger`<sup>Optional</sup> <a name="fetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.fetchConnectionStringTrigger"></a>

```java
public java.lang.Number getFetchConnectionStringTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#get_connection_string_trigger GloballyDistributedDatabaseShardedDatabase#get_connection_string_trigger}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#freeform_tags GloballyDistributedDatabaseShardedDatabase#freeform_tags}.

---

##### `generateGsmCertificateSigningRequestTrigger`<sup>Optional</sup> <a name="generateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateGsmCertificateSigningRequestTrigger"></a>

```java
public java.lang.Number getGenerateGsmCertificateSigningRequestTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#generate_gsm_certificate_signing_request_trigger}.

---

##### `generateWalletPassword`<sup>Optional</sup> <a name="generateWalletPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateWalletPassword"></a>

```java
public java.lang.String getGenerateWalletPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_password GloballyDistributedDatabaseShardedDatabase#generate_wallet_password}.

---

##### `generateWalletTrigger`<sup>Optional</sup> <a name="generateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.generateWalletTrigger"></a>

```java
public java.lang.Number getGenerateWalletTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#generate_wallet_trigger}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#id GloballyDistributedDatabaseShardedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.patchOperations"></a>

```java
public java.lang.Object getPatchOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>>

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#patch_operations GloballyDistributedDatabaseShardedDatabase#patch_operations}

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_factor GloballyDistributedDatabaseShardedDatabase#replication_factor}.

---

##### `replicationMethod`<sup>Optional</sup> <a name="replicationMethod" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationMethod"></a>

```java
public java.lang.String getReplicationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_method GloballyDistributedDatabaseShardedDatabase#replication_method}.

---

##### `replicationUnit`<sup>Optional</sup> <a name="replicationUnit" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.replicationUnit"></a>

```java
public java.lang.Number getReplicationUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#replication_unit GloballyDistributedDatabaseShardedDatabase#replication_unit}.

---

##### `startDatabaseTrigger`<sup>Optional</sup> <a name="startDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.startDatabaseTrigger"></a>

```java
public java.lang.Number getStartDatabaseTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#start_database_trigger GloballyDistributedDatabaseShardedDatabase#start_database_trigger}.

---

##### `stopDatabaseTrigger`<sup>Optional</sup> <a name="stopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.stopDatabaseTrigger"></a>

```java
public java.lang.Number getStopDatabaseTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#stop_database_trigger GloballyDistributedDatabaseShardedDatabase#stop_database_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.timeouts"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#timeouts GloballyDistributedDatabaseShardedDatabase#timeouts}

---

##### `uploadSignedCertificateAndGenerateWalletTrigger`<sup>Optional</sup> <a name="uploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.uploadSignedCertificateAndGenerateWalletTrigger"></a>

```java
public java.lang.Number getUploadSignedCertificateAndGenerateWalletTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#upload_signed_certificate_and_generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#upload_signed_certificate_and_generate_wallet_trigger}.

---

##### `validateNetworkTrigger`<sup>Optional</sup> <a name="validateNetworkTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConfig.property.validateNetworkTrigger"></a>

```java
public java.lang.Number getValidateNetworkTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#validate_network_trigger GloballyDistributedDatabaseShardedDatabase#validate_network_trigger}.

---

### GloballyDistributedDatabaseShardedDatabaseConnectionStrings <a name="GloballyDistributedDatabaseShardedDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseConnectionStrings;

GloballyDistributedDatabaseShardedDatabaseConnectionStrings.builder()
    .build();
```


### GloballyDistributedDatabaseShardedDatabaseGsms <a name="GloballyDistributedDatabaseShardedDatabaseGsms" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseGsms;

GloballyDistributedDatabaseShardedDatabaseGsms.builder()
    .build();
```


### GloballyDistributedDatabaseShardedDatabasePatchOperations <a name="GloballyDistributedDatabaseShardedDatabasePatchOperations" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabasePatchOperations;

GloballyDistributedDatabaseShardedDatabasePatchOperations.builder()
    .operation(java.lang.String)
    .selection(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.operation">operation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#operation GloballyDistributedDatabaseShardedDatabase#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.selection">selection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#selection GloballyDistributedDatabaseShardedDatabase#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#value GloballyDistributedDatabaseShardedDatabase#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#operation GloballyDistributedDatabaseShardedDatabase#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.selection"></a>

```java
public java.lang.String getSelection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#selection GloballyDistributedDatabaseShardedDatabase#selection}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#value GloballyDistributedDatabaseShardedDatabase#value}.

---

### GloballyDistributedDatabaseShardedDatabaseShardDetails <a name="GloballyDistributedDatabaseShardedDatabaseShardDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseShardDetails;

GloballyDistributedDatabaseShardedDatabaseShardDetails.builder()
    .adminPassword(java.lang.String)
    .cloudAutonomousVmClusterId(java.lang.String)
    .computeCount(java.lang.Number)
    .dataStorageSizeInGbs(java.lang.Number)
    .isAutoScalingEnabled(java.lang.Boolean)
    .isAutoScalingEnabled(IResolvable)
//  .encryptionKeyDetails(GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails)
//  .peerCloudAutonomousVmClusterId(java.lang.String)
//  .shardSpace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.encryptionKeyDetails">encryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a></code> | encryption_key_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.shardSpace">shardSpace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#shard_space GloballyDistributedDatabaseShardedDatabase#shard_space}. |

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}.

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.cloudAutonomousVmClusterId"></a>

```java
public java.lang.String getCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}.

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}.

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.dataStorageSizeInGbs"></a>

```java
public java.lang.Number getDataStorageSizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}.

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}.

---

##### `encryptionKeyDetails`<sup>Optional</sup> <a name="encryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.encryptionKeyDetails"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails getEncryptionKeyDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

encryption_key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#encryption_key_details GloballyDistributedDatabaseShardedDatabase#encryption_key_details}

---

##### `peerCloudAutonomousVmClusterId`<sup>Optional</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.peerCloudAutonomousVmClusterId"></a>

```java
public java.lang.String getPeerCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}.

---

##### `shardSpace`<sup>Optional</sup> <a name="shardSpace" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails.property.shardSpace"></a>

```java
public java.lang.String getShardSpace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#shard_space GloballyDistributedDatabaseShardedDatabase#shard_space}.

---

### GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails <a name="GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails;

GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.builder()
    .kmsKeyId(java.lang.String)
    .vaultId(java.lang.String)
//  .kmsKeyVersionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}. |

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}.

---

### GloballyDistributedDatabaseShardedDatabaseTimeouts <a name="GloballyDistributedDatabaseShardedDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseTimeouts;

GloballyDistributedDatabaseShardedDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#create GloballyDistributedDatabaseShardedDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#delete GloballyDistributedDatabaseShardedDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#update GloballyDistributedDatabaseShardedDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#create GloballyDistributedDatabaseShardedDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#delete GloballyDistributedDatabaseShardedDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_sharded_database#update GloballyDistributedDatabaseShardedDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference;

new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resetKmsKeyVersionId">resetKmsKeyVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyVersionId` <a name="resetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resetKmsKeyVersionId"></a>

```java
public void resetKmsKeyVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionIdInput">kmsKeyVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionIdInput`<sup>Optional</sup> <a name="kmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionIdInput"></a>

```java
public java.lang.String getKmsKeyVersionIdInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

---


### GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList;

new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>>

---


### GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference;

new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.putEncryptionKeyDetails">putEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resetEncryptionKeyDetails">resetEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resetPeerCloudAutonomousVmClusterId">resetPeerCloudAutonomousVmClusterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKeyDetails` <a name="putEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.putEncryptionKeyDetails"></a>

```java
public void putEncryptionKeyDetails(GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.putEncryptionKeyDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

---

##### `resetEncryptionKeyDetails` <a name="resetEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resetEncryptionKeyDetails"></a>

```java
public void resetEncryptionKeyDetails()
```

##### `resetPeerCloudAutonomousVmClusterId` <a name="resetPeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resetPeerCloudAutonomousVmClusterId"></a>

```java
public void resetPeerCloudAutonomousVmClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId">containerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId">containerDatabaseParentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails">encryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup">shardGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId">supportingResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires">timeSslCertificateExpires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterIdInput">cloudAutonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbsInput">dataStorageSizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetailsInput">encryptionKeyDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterIdInput">peerCloudAutonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId"></a>

```java
public java.lang.String getContainerDatabaseId();
```

- *Type:* java.lang.String

---

##### `containerDatabaseParentId`<sup>Required</sup> <a name="containerDatabaseParentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId"></a>

```java
public java.lang.String getContainerDatabaseParentId();
```

- *Type:* java.lang.String

---

##### `encryptionKeyDetails`<sup>Required</sup> <a name="encryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference getEncryptionKeyDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `shardGroup`<sup>Required</sup> <a name="shardGroup" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup"></a>

```java
public java.lang.String getShardGroup();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `supportingResourceId`<sup>Required</sup> <a name="supportingResourceId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId"></a>

```java
public java.lang.String getSupportingResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeSslCertificateExpires`<sup>Required</sup> <a name="timeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires"></a>

```java
public java.lang.String getTimeSslCertificateExpires();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `cloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="cloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterIdInput"></a>

```java
public java.lang.String getCloudAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGbsInput`<sup>Optional</sup> <a name="dataStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbsInput"></a>

```java
public java.lang.Number getDataStorageSizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `encryptionKeyDetailsInput`<sup>Optional</sup> <a name="encryptionKeyDetailsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetailsInput"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails getEncryptionKeyDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabledInput"></a>

```java
public java.lang.Object getIsAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `peerCloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="peerCloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterIdInput"></a>

```java
public java.lang.String getPeerCloudAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```java
public java.lang.String getCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```java
public java.lang.Number getDataStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `peerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```java
public java.lang.String getPeerCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseCatalogDetails">GloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>

---


### GloballyDistributedDatabaseShardedDatabaseConnectionStringsList <a name="GloballyDistributedDatabaseShardedDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList;

new GloballyDistributedDatabaseShardedDatabaseConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference;

new GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStrings">GloballyDistributedDatabaseShardedDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```java
public StringMap getAllConnectionStrings();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseConnectionStrings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseConnectionStrings">GloballyDistributedDatabaseShardedDatabaseConnectionStrings</a>

---


### GloballyDistributedDatabaseShardedDatabaseGsmsList <a name="GloballyDistributedDatabaseShardedDatabaseGsmsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseGsmsList;

new GloballyDistributedDatabaseShardedDatabaseGsmsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.get"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference;

new GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId">supportingResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires">timeSslCertificateExpires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsms">GloballyDistributedDatabaseShardedDatabaseGsms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs"></a>

```java
public java.lang.Number getDataStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `supportingResourceId`<sup>Required</sup> <a name="supportingResourceId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId"></a>

```java
public java.lang.String getSupportingResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeSslCertificateExpires`<sup>Required</sup> <a name="timeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires"></a>

```java
public java.lang.String getTimeSslCertificateExpires();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseGsms getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseGsms">GloballyDistributedDatabaseShardedDatabaseGsms</a>

---


### GloballyDistributedDatabaseShardedDatabasePatchOperationsList <a name="GloballyDistributedDatabaseShardedDatabasePatchOperationsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabasePatchOperationsList;

new GloballyDistributedDatabaseShardedDatabasePatchOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.get"></a>

```java
public GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>>

---


### GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference <a name="GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference;

new GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selectionInput">selectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection">selection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `selectionInput`<sup>Optional</sup> <a name="selectionInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selectionInput"></a>

```java
public java.lang.String getSelectionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection"></a>

```java
public java.lang.String getSelection();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabasePatchOperations">GloballyDistributedDatabaseShardedDatabasePatchOperations</a>

---


### GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference;

new GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resetKmsKeyVersionId">resetKmsKeyVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyVersionId` <a name="resetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resetKmsKeyVersionId"></a>

```java
public void resetKmsKeyVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionIdInput">kmsKeyVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionIdInput`<sup>Optional</sup> <a name="kmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionIdInput"></a>

```java
public java.lang.String getKmsKeyVersionIdInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

---


### GloballyDistributedDatabaseShardedDatabaseShardDetailsList <a name="GloballyDistributedDatabaseShardedDatabaseShardDetailsList" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseShardDetailsList;

new GloballyDistributedDatabaseShardedDatabaseShardDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.get"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>>

---


### GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference;

new GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.putEncryptionKeyDetails">putEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetEncryptionKeyDetails">resetEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetPeerCloudAutonomousVmClusterId">resetPeerCloudAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetShardSpace">resetShardSpace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKeyDetails` <a name="putEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.putEncryptionKeyDetails"></a>

```java
public void putEncryptionKeyDetails(GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.putEncryptionKeyDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

---

##### `resetEncryptionKeyDetails` <a name="resetEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetEncryptionKeyDetails"></a>

```java
public void resetEncryptionKeyDetails()
```

##### `resetPeerCloudAutonomousVmClusterId` <a name="resetPeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetPeerCloudAutonomousVmClusterId"></a>

```java
public void resetPeerCloudAutonomousVmClusterId()
```

##### `resetShardSpace` <a name="resetShardSpace" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resetShardSpace"></a>

```java
public void resetShardSpace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId">containerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId">containerDatabaseParentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails">encryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup">shardGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId">supportingResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires">timeSslCertificateExpires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterIdInput">cloudAutonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbsInput">dataStorageSizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetailsInput">encryptionKeyDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterIdInput">peerCloudAutonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpaceInput">shardSpaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId">peerCloudAutonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace">shardSpace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId"></a>

```java
public java.lang.String getContainerDatabaseId();
```

- *Type:* java.lang.String

---

##### `containerDatabaseParentId`<sup>Required</sup> <a name="containerDatabaseParentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId"></a>

```java
public java.lang.String getContainerDatabaseParentId();
```

- *Type:* java.lang.String

---

##### `encryptionKeyDetails`<sup>Required</sup> <a name="encryptionKeyDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference getEncryptionKeyDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `shardGroup`<sup>Required</sup> <a name="shardGroup" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup"></a>

```java
public java.lang.String getShardGroup();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `supportingResourceId`<sup>Required</sup> <a name="supportingResourceId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId"></a>

```java
public java.lang.String getSupportingResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeSslCertificateExpires`<sup>Required</sup> <a name="timeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires"></a>

```java
public java.lang.String getTimeSslCertificateExpires();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `cloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="cloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterIdInput"></a>

```java
public java.lang.String getCloudAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGbsInput`<sup>Optional</sup> <a name="dataStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbsInput"></a>

```java
public java.lang.Number getDataStorageSizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `encryptionKeyDetailsInput`<sup>Optional</sup> <a name="encryptionKeyDetailsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetailsInput"></a>

```java
public GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails getEncryptionKeyDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabledInput"></a>

```java
public java.lang.Object getIsAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `peerCloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="peerCloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterIdInput"></a>

```java
public java.lang.String getPeerCloudAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `shardSpaceInput`<sup>Optional</sup> <a name="shardSpaceInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpaceInput"></a>

```java
public java.lang.String getShardSpaceInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```java
public java.lang.String getCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```java
public java.lang.Number getDataStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `peerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="peerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```java
public java.lang.String getPeerCloudAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `shardSpace`<sup>Required</sup> <a name="shardSpace" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace"></a>

```java
public java.lang.String getShardSpace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseShardDetails">GloballyDistributedDatabaseShardedDatabaseShardDetails</a>

---


### GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference <a name="GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_sharded_database.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference;

new GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabaseShardedDatabase.GloballyDistributedDatabaseShardedDatabaseTimeouts">GloballyDistributedDatabaseShardedDatabaseTimeouts</a>

---



