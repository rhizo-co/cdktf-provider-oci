# `dataOciJmsFleetInstallationSites` Submodule <a name="`dataOciJmsFleetInstallationSites` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetInstallationSites <a name="DataOciJmsFleetInstallationSites" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites oci_jms_fleet_installation_sites}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSites;

DataOciJmsFleetInstallationSites.Builder.create(Construct scope, java.lang.String id)
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
    .fleetId(java.lang.String)
//  .applicationId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciJmsFleetInstallationSitesFilter>)
//  .id(java.lang.String)
//  .installationPath(java.lang.String)
//  .jreDistribution(java.lang.String)
//  .jreSecurityStatus(java.lang.String)
//  .jreVendor(java.lang.String)
//  .jreVersion(java.lang.String)
//  .managedInstanceId(java.lang.String)
//  .osFamily(java.util.List<java.lang.String>)
//  .pathContains(java.lang.String)
//  .timeEnd(java.lang.String)
//  .timeStart(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.installationPath">installationPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreDistribution">jreDistribution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreSecurityStatus">jreSecurityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreVendor">jreVendor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreVersion">jreVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.osFamily">osFamily</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.pathContains">pathContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.timeEnd">timeEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.timeStart">timeStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.fleetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#filter DataOciJmsFleetInstallationSites#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installationPath`<sup>Optional</sup> <a name="installationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.installationPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}.

---

##### `jreDistribution`<sup>Optional</sup> <a name="jreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreDistribution"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}.

---

##### `jreSecurityStatus`<sup>Optional</sup> <a name="jreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreSecurityStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}.

---

##### `jreVendor`<sup>Optional</sup> <a name="jreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreVendor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}.

---

##### `jreVersion`<sup>Optional</sup> <a name="jreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.jreVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}.

---

##### `managedInstanceId`<sup>Optional</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.osFamily"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}.

---

##### `pathContains`<sup>Optional</sup> <a name="pathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.pathContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.timeEnd"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.timeStart"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetInstallationPath">resetInstallationPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreDistribution">resetJreDistribution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreSecurityStatus">resetJreSecurityStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVendor">resetJreVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVersion">resetJreVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetManagedInstanceId">resetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetPathContains">resetPathContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciJmsFleetInstallationSitesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>>

---

##### `resetApplicationId` <a name="resetApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetId"></a>

```java
public void resetId()
```

##### `resetInstallationPath` <a name="resetInstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetInstallationPath"></a>

```java
public void resetInstallationPath()
```

##### `resetJreDistribution` <a name="resetJreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreDistribution"></a>

```java
public void resetJreDistribution()
```

##### `resetJreSecurityStatus` <a name="resetJreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreSecurityStatus"></a>

```java
public void resetJreSecurityStatus()
```

##### `resetJreVendor` <a name="resetJreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVendor"></a>

```java
public void resetJreVendor()
```

##### `resetJreVersion` <a name="resetJreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVersion"></a>

```java
public void resetJreVersion()
```

##### `resetManagedInstanceId` <a name="resetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetManagedInstanceId"></a>

```java
public void resetManagedInstanceId()
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOsFamily"></a>

```java
public void resetOsFamily()
```

##### `resetPathContains` <a name="resetPathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetPathContains"></a>

```java
public void resetPathContains()
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeEnd"></a>

```java
public void resetTimeEnd()
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeStart"></a>

```java
public void resetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetInstallationSites resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSites;

DataOciJmsFleetInstallationSites.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSites;

DataOciJmsFleetInstallationSites.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSites;

DataOciJmsFleetInstallationSites.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSites;

DataOciJmsFleetInstallationSites.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciJmsFleetInstallationSites.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciJmsFleetInstallationSites resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciJmsFleetInstallationSites to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciJmsFleetInstallationSites that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetInstallationSites to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList">DataOciJmsFleetInstallationSitesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationSiteCollection">installationSiteCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetIdInput">fleetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPathInput">installationPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistributionInput">jreDistributionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatusInput">jreSecurityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendorInput">jreVendorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersionInput">jreVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamilyInput">osFamilyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContainsInput">pathContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEndInput">timeEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStartInput">timeStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPath">installationPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistribution">jreDistribution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatus">jreSecurityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendor">jreVendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersion">jreVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamily">osFamily</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContains">pathContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEnd">timeEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filter"></a>

```java
public DataOciJmsFleetInstallationSitesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList">DataOciJmsFleetInstallationSitesFilterList</a>

---

##### `installationSiteCollection`<sup>Required</sup> <a name="installationSiteCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationSiteCollection"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionList getInstallationSiteCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>>

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetIdInput"></a>

```java
public java.lang.String getFleetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `installationPathInput`<sup>Optional</sup> <a name="installationPathInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPathInput"></a>

```java
public java.lang.String getInstallationPathInput();
```

- *Type:* java.lang.String

---

##### `jreDistributionInput`<sup>Optional</sup> <a name="jreDistributionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistributionInput"></a>

```java
public java.lang.String getJreDistributionInput();
```

- *Type:* java.lang.String

---

##### `jreSecurityStatusInput`<sup>Optional</sup> <a name="jreSecurityStatusInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatusInput"></a>

```java
public java.lang.String getJreSecurityStatusInput();
```

- *Type:* java.lang.String

---

##### `jreVendorInput`<sup>Optional</sup> <a name="jreVendorInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendorInput"></a>

```java
public java.lang.String getJreVendorInput();
```

- *Type:* java.lang.String

---

##### `jreVersionInput`<sup>Optional</sup> <a name="jreVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersionInput"></a>

```java
public java.lang.String getJreVersionInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamilyInput"></a>

```java
public java.util.List<java.lang.String> getOsFamilyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathContainsInput`<sup>Optional</sup> <a name="pathContainsInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContainsInput"></a>

```java
public java.lang.String getPathContainsInput();
```

- *Type:* java.lang.String

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEndInput"></a>

```java
public java.lang.String getTimeEndInput();
```

- *Type:* java.lang.String

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStartInput"></a>

```java
public java.lang.String getTimeStartInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `installationPath`<sup>Required</sup> <a name="installationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPath"></a>

```java
public java.lang.String getInstallationPath();
```

- *Type:* java.lang.String

---

##### `jreDistribution`<sup>Required</sup> <a name="jreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistribution"></a>

```java
public java.lang.String getJreDistribution();
```

- *Type:* java.lang.String

---

##### `jreSecurityStatus`<sup>Required</sup> <a name="jreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatus"></a>

```java
public java.lang.String getJreSecurityStatus();
```

- *Type:* java.lang.String

---

##### `jreVendor`<sup>Required</sup> <a name="jreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendor"></a>

```java
public java.lang.String getJreVendor();
```

- *Type:* java.lang.String

---

##### `jreVersion`<sup>Required</sup> <a name="jreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersion"></a>

```java
public java.lang.String getJreVersion();
```

- *Type:* java.lang.String

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamily"></a>

```java
public java.util.List<java.lang.String> getOsFamily();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathContains`<sup>Required</sup> <a name="pathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContains"></a>

```java
public java.lang.String getPathContains();
```

- *Type:* java.lang.String

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEnd"></a>

```java
public java.lang.String getTimeEnd();
```

- *Type:* java.lang.String

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetInstallationSitesConfig <a name="DataOciJmsFleetInstallationSitesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesConfig;

DataOciJmsFleetInstallationSitesConfig.builder()
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
    .fleetId(java.lang.String)
//  .applicationId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciJmsFleetInstallationSitesFilter>)
//  .id(java.lang.String)
//  .installationPath(java.lang.String)
//  .jreDistribution(java.lang.String)
//  .jreSecurityStatus(java.lang.String)
//  .jreVendor(java.lang.String)
//  .jreVersion(java.lang.String)
//  .managedInstanceId(java.lang.String)
//  .osFamily(java.util.List<java.lang.String>)
//  .pathContains(java.lang.String)
//  .timeEnd(java.lang.String)
//  .timeStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.installationPath">installationPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreDistribution">jreDistribution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreSecurityStatus">jreSecurityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVendor">jreVendor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVersion">jreVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.osFamily">osFamily</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.pathContains">pathContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeEnd">timeEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#filter DataOciJmsFleetInstallationSites#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installationPath`<sup>Optional</sup> <a name="installationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.installationPath"></a>

```java
public java.lang.String getInstallationPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}.

---

##### `jreDistribution`<sup>Optional</sup> <a name="jreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreDistribution"></a>

```java
public java.lang.String getJreDistribution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}.

---

##### `jreSecurityStatus`<sup>Optional</sup> <a name="jreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreSecurityStatus"></a>

```java
public java.lang.String getJreSecurityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}.

---

##### `jreVendor`<sup>Optional</sup> <a name="jreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVendor"></a>

```java
public java.lang.String getJreVendor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}.

---

##### `jreVersion`<sup>Optional</sup> <a name="jreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVersion"></a>

```java
public java.lang.String getJreVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}.

---

##### `managedInstanceId`<sup>Optional</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.osFamily"></a>

```java
public java.util.List<java.lang.String> getOsFamily();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}.

---

##### `pathContains`<sup>Optional</sup> <a name="pathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.pathContains"></a>

```java
public java.lang.String getPathContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeEnd"></a>

```java
public java.lang.String getTimeEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}.

---

### DataOciJmsFleetInstallationSitesFilter <a name="DataOciJmsFleetInstallationSitesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesFilter;

DataOciJmsFleetInstallationSitesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#name DataOciJmsFleetInstallationSites#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#values DataOciJmsFleetInstallationSites#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#regex DataOciJmsFleetInstallationSites#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#name DataOciJmsFleetInstallationSites#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#values DataOciJmsFleetInstallationSites#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#regex DataOciJmsFleetInstallationSites#regex}.

---

### DataOciJmsFleetInstallationSitesInstallationSiteCollection <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollection;

DataOciJmsFleetInstallationSitesInstallationSiteCollection.builder()
    .build();
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems;

DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems.builder()
    .build();
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems;

DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems.builder()
    .build();
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct;

DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct.builder()
    .build();
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre;

DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre.builder()
    .build();
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem;

DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetInstallationSitesFilterList <a name="DataOciJmsFleetInstallationSitesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesFilterList;

new DataOciJmsFleetInstallationSitesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get"></a>

```java
public DataOciJmsFleetInstallationSitesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>>

---


### DataOciJmsFleetInstallationSitesFilterOutputReference <a name="DataOciJmsFleetInstallationSitesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesFilterOutputReference;

new DataOciJmsFleetInstallationSitesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.internalValue"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.distribution">distribution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.jreKey">jreKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.vendor">vendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.distribution"></a>

```java
public java.lang.String getDistribution();
```

- *Type:* java.lang.String

---

##### `jreKey`<sup>Required</sup> <a name="jreKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.jreKey"></a>

```java
public java.lang.String getJreKey();
```

- *Type:* java.lang.String

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.internalValue"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.managedInstanceCount">managedInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `managedInstanceCount`<sup>Required</sup> <a name="managedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.managedInstanceCount"></a>

```java
public java.lang.Number getManagedInstanceCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.internalValue"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.approximateApplicationCount">approximateApplicationCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.blocklist">blocklist</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.installationKey">installationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.jre">jre</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.operatingSystem">operatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.securityStatus">securityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.timeLastSeen">timeLastSeen</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approximateApplicationCount`<sup>Required</sup> <a name="approximateApplicationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.approximateApplicationCount"></a>

```java
public java.lang.Number getApproximateApplicationCount();
```

- *Type:* java.lang.Number

---

##### `blocklist`<sup>Required</sup> <a name="blocklist" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.blocklist"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList getBlocklist();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList</a>

---

##### `installationKey`<sup>Required</sup> <a name="installationKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.installationKey"></a>

```java
public java.lang.String getInstallationKey();
```

- *Type:* java.lang.String

---

##### `jre`<sup>Required</sup> <a name="jre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.jre"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList getJre();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList</a>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.operatingSystem"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList getOperatingSystem();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `securityStatus`<sup>Required</sup> <a name="securityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.securityStatus"></a>

```java
public java.lang.String getSecurityStatus();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeLastSeen`<sup>Required</sup> <a name="timeLastSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.timeLastSeen"></a>

```java
public java.lang.String getTimeLastSeen();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.internalValue"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.items"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_installation_sites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference;

new DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection">DataOciJmsFleetInstallationSitesInstallationSiteCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.items"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.internalValue"></a>

```java
public DataOciJmsFleetInstallationSitesInstallationSiteCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection">DataOciJmsFleetInstallationSitesInstallationSiteCollection</a>

---



