# `fileStorageMountTarget` Submodule <a name="`fileStorageMountTarget` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageMountTarget <a name="FileStorageMountTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target oci_file_storage_mount_target}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTarget;

FileStorageMountTarget.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostnameLabel(java.lang.String)
//  .id(java.lang.String)
//  .idmapType(java.lang.String)
//  .ipAddress(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .kerberos(FileStorageMountTargetKerberos)
//  .ldapIdmap(FileStorageMountTargetLdapIdmap)
//  .locks(IResolvable)
//  .locks(java.util.List<FileStorageMountTargetLocks>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .requestedThroughput(java.lang.String)
//  .timeouts(FileStorageMountTargetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.idmapType">idmapType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | kerberos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.ldapIdmap">ldapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | ldap_idmap block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.requestedThroughput">requestedThroughput</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.hostnameLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idmapType`<sup>Optional</sup> <a name="idmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.idmapType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.ipAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.isLockOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}.

---

##### `kerberos`<sup>Optional</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.kerberos"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos FileStorageMountTarget#kerberos}

---

##### `ldapIdmap`<sup>Optional</sup> <a name="ldapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.ldapIdmap"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

ldap_idmap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ldap_idmap FileStorageMountTarget#ldap_idmap}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#locks FileStorageMountTarget#locks}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}.

---

##### `requestedThroughput`<sup>Optional</sup> <a name="requestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.requestedThroughput"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#timeouts FileStorageMountTarget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos">putKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap">putLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType">resetIdmapType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos">resetKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap">resetLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput">resetRequestedThroughput</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKerberos` <a name="putKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos"></a>

```java
public void putKerberos(FileStorageMountTargetKerberos value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---

##### `putLdapIdmap` <a name="putLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap"></a>

```java
public void putLdapIdmap(FileStorageMountTargetLdapIdmap value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<FileStorageMountTargetLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts"></a>

```java
public void putTimeouts(FileStorageMountTargetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel"></a>

```java
public void resetHostnameLabel()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId"></a>

```java
public void resetId()
```

##### `resetIdmapType` <a name="resetIdmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType"></a>

```java
public void resetIdmapType()
```

##### `resetIpAddress` <a name="resetIpAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride"></a>

```java
public void resetIsLockOverride()
```

##### `resetKerberos` <a name="resetKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos"></a>

```java
public void resetKerberos()
```

##### `resetLdapIdmap` <a name="resetLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap"></a>

```java
public void resetLdapIdmap()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetRequestedThroughput` <a name="resetRequestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput"></a>

```java
public void resetRequestedThroughput()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTarget;

FileStorageMountTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTarget;

FileStorageMountTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTarget;

FileStorageMountTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTarget;

FileStorageMountTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FileStorageMountTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FileStorageMountTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FileStorageMountTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageMountTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId">exportSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap">ldapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput">observedThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds">privateIpIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity">reservedStorageCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd">timeBillingCycleEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput">idmapTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput">kerberosInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput">ldapIdmapInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput">requestedThroughputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType">idmapType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput">requestedThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportSetId`<sup>Required</sup> <a name="exportSetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId"></a>

```java
public java.lang.String getExportSetId();
```

- *Type:* java.lang.String

---

##### `kerberos`<sup>Required</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos"></a>

```java
public FileStorageMountTargetKerberosOutputReference getKerberos();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a>

---

##### `ldapIdmap`<sup>Required</sup> <a name="ldapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap"></a>

```java
public FileStorageMountTargetLdapIdmapOutputReference getLdapIdmap();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks"></a>

```java
public FileStorageMountTargetLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a>

---

##### `observedThroughput`<sup>Required</sup> <a name="observedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput"></a>

```java
public java.lang.String getObservedThroughput();
```

- *Type:* java.lang.String

---

##### `privateIpIds`<sup>Required</sup> <a name="privateIpIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds"></a>

```java
public java.util.List<java.lang.String> getPrivateIpIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reservedStorageCapacity`<sup>Required</sup> <a name="reservedStorageCapacity" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity"></a>

```java
public java.lang.String getReservedStorageCapacity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeBillingCycleEnd`<sup>Required</sup> <a name="timeBillingCycleEnd" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd"></a>

```java
public java.lang.String getTimeBillingCycleEnd();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts"></a>

```java
public FileStorageMountTargetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput"></a>

```java
public java.lang.String getHostnameLabelInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idmapTypeInput`<sup>Optional</sup> <a name="idmapTypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput"></a>

```java
public java.lang.String getIdmapTypeInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput"></a>

```java
public java.lang.Object getIsLockOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberosInput`<sup>Optional</sup> <a name="kerberosInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput"></a>

```java
public FileStorageMountTargetKerberos getKerberosInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---

##### `ldapIdmapInput`<sup>Optional</sup> <a name="ldapIdmapInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput"></a>

```java
public FileStorageMountTargetLdapIdmap getLdapIdmapInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestedThroughputInput`<sup>Optional</sup> <a name="requestedThroughputInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput"></a>

```java
public java.lang.String getRequestedThroughputInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idmapType`<sup>Required</sup> <a name="idmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType"></a>

```java
public java.lang.String getIdmapType();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestedThroughput`<sup>Required</sup> <a name="requestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput"></a>

```java
public java.lang.String getRequestedThroughput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageMountTargetConfig <a name="FileStorageMountTargetConfig" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetConfig;

FileStorageMountTargetConfig.builder()
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostnameLabel(java.lang.String)
//  .id(java.lang.String)
//  .idmapType(java.lang.String)
//  .ipAddress(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .kerberos(FileStorageMountTargetKerberos)
//  .ldapIdmap(FileStorageMountTargetLdapIdmap)
//  .locks(IResolvable)
//  .locks(java.util.List<FileStorageMountTargetLocks>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .requestedThroughput(java.lang.String)
//  .timeouts(FileStorageMountTargetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType">idmapType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | kerberos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap">ldapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | ldap_idmap block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput">requestedThroughput</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idmapType`<sup>Optional</sup> <a name="idmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType"></a>

```java
public java.lang.String getIdmapType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}.

---

##### `kerberos`<sup>Optional</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos"></a>

```java
public FileStorageMountTargetKerberos getKerberos();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos FileStorageMountTarget#kerberos}

---

##### `ldapIdmap`<sup>Optional</sup> <a name="ldapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap"></a>

```java
public FileStorageMountTargetLdapIdmap getLdapIdmap();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

ldap_idmap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ldap_idmap FileStorageMountTarget#ldap_idmap}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#locks FileStorageMountTarget#locks}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}.

---

##### `requestedThroughput`<sup>Optional</sup> <a name="requestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput"></a>

```java
public java.lang.String getRequestedThroughput();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts"></a>

```java
public FileStorageMountTargetTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#timeouts FileStorageMountTarget#timeouts}

---

### FileStorageMountTargetKerberos <a name="FileStorageMountTargetKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetKerberos;

FileStorageMountTargetKerberos.builder()
    .kerberosRealm(java.lang.String)
//  .backupKeyTabSecretVersion(java.lang.Number)
//  .currentKeyTabSecretVersion(java.lang.Number)
//  .isKerberosEnabled(java.lang.Boolean)
//  .isKerberosEnabled(IResolvable)
//  .keyTabSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm">kerberosRealm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion">backupKeyTabSecretVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion">currentKeyTabSecretVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled">isKerberosEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId">keyTabSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}. |

---

##### `kerberosRealm`<sup>Required</sup> <a name="kerberosRealm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm"></a>

```java
public java.lang.String getKerberosRealm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}.

---

##### `backupKeyTabSecretVersion`<sup>Optional</sup> <a name="backupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion"></a>

```java
public java.lang.Number getBackupKeyTabSecretVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}.

---

##### `currentKeyTabSecretVersion`<sup>Optional</sup> <a name="currentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion"></a>

```java
public java.lang.Number getCurrentKeyTabSecretVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}.

---

##### `isKerberosEnabled`<sup>Optional</sup> <a name="isKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled"></a>

```java
public java.lang.Object getIsKerberosEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}.

---

##### `keyTabSecretId`<sup>Optional</sup> <a name="keyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId"></a>

```java
public java.lang.String getKeyTabSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}.

---

### FileStorageMountTargetLdapIdmap <a name="FileStorageMountTargetLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetLdapIdmap;

FileStorageMountTargetLdapIdmap.builder()
//  .cacheLifetimeSeconds(java.lang.Number)
//  .cacheRefreshIntervalSeconds(java.lang.Number)
//  .groupSearchBase(java.lang.String)
//  .negativeCacheLifetimeSeconds(java.lang.Number)
//  .outboundConnector1Id(java.lang.String)
//  .outboundConnector2Id(java.lang.String)
//  .schemaType(java.lang.String)
//  .userSearchBase(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds">cacheLifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds">cacheRefreshIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase">groupSearchBase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds">negativeCacheLifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id">outboundConnector1Id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id">outboundConnector2Id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType">schemaType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase">userSearchBase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}. |

---

##### `cacheLifetimeSeconds`<sup>Optional</sup> <a name="cacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds"></a>

```java
public java.lang.Number getCacheLifetimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}.

---

##### `cacheRefreshIntervalSeconds`<sup>Optional</sup> <a name="cacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds"></a>

```java
public java.lang.Number getCacheRefreshIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}.

---

##### `groupSearchBase`<sup>Optional</sup> <a name="groupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase"></a>

```java
public java.lang.String getGroupSearchBase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}.

---

##### `negativeCacheLifetimeSeconds`<sup>Optional</sup> <a name="negativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds"></a>

```java
public java.lang.Number getNegativeCacheLifetimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}.

---

##### `outboundConnector1Id`<sup>Optional</sup> <a name="outboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id"></a>

```java
public java.lang.String getOutboundConnector1Id();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}.

---

##### `outboundConnector2Id`<sup>Optional</sup> <a name="outboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id"></a>

```java
public java.lang.String getOutboundConnector2Id();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}.

---

##### `schemaType`<sup>Optional</sup> <a name="schemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType"></a>

```java
public java.lang.String getSchemaType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}.

---

##### `userSearchBase`<sup>Optional</sup> <a name="userSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase"></a>

```java
public java.lang.String getUserSearchBase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}.

---

### FileStorageMountTargetLocks <a name="FileStorageMountTargetLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetLocks;

FileStorageMountTargetLocks.builder()
    .type(java.lang.String)
//  .message(java.lang.String)
//  .relatedResourceId(java.lang.String)
//  .timeCreated(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}.

---

### FileStorageMountTargetTimeouts <a name="FileStorageMountTargetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetTimeouts;

FileStorageMountTargetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageMountTargetKerberosOutputReference <a name="FileStorageMountTargetKerberosOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetKerberosOutputReference;

new FileStorageMountTargetKerberosOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion">resetBackupKeyTabSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion">resetCurrentKeyTabSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled">resetIsKerberosEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId">resetKeyTabSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupKeyTabSecretVersion` <a name="resetBackupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion"></a>

```java
public void resetBackupKeyTabSecretVersion()
```

##### `resetCurrentKeyTabSecretVersion` <a name="resetCurrentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion"></a>

```java
public void resetCurrentKeyTabSecretVersion()
```

##### `resetIsKerberosEnabled` <a name="resetIsKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled"></a>

```java
public void resetIsKerberosEnabled()
```

##### `resetKeyTabSecretId` <a name="resetKeyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId"></a>

```java
public void resetKeyTabSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput">backupKeyTabSecretVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput">currentKeyTabSecretVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput">isKerberosEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput">kerberosRealmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput">keyTabSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion">backupKeyTabSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion">currentKeyTabSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled">isKerberosEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm">kerberosRealm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId">keyTabSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupKeyTabSecretVersionInput`<sup>Optional</sup> <a name="backupKeyTabSecretVersionInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput"></a>

```java
public java.lang.Number getBackupKeyTabSecretVersionInput();
```

- *Type:* java.lang.Number

---

##### `currentKeyTabSecretVersionInput`<sup>Optional</sup> <a name="currentKeyTabSecretVersionInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput"></a>

```java
public java.lang.Number getCurrentKeyTabSecretVersionInput();
```

- *Type:* java.lang.Number

---

##### `isKerberosEnabledInput`<sup>Optional</sup> <a name="isKerberosEnabledInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput"></a>

```java
public java.lang.Object getIsKerberosEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberosRealmInput`<sup>Optional</sup> <a name="kerberosRealmInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput"></a>

```java
public java.lang.String getKerberosRealmInput();
```

- *Type:* java.lang.String

---

##### `keyTabSecretIdInput`<sup>Optional</sup> <a name="keyTabSecretIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput"></a>

```java
public java.lang.String getKeyTabSecretIdInput();
```

- *Type:* java.lang.String

---

##### `backupKeyTabSecretVersion`<sup>Required</sup> <a name="backupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion"></a>

```java
public java.lang.Number getBackupKeyTabSecretVersion();
```

- *Type:* java.lang.Number

---

##### `currentKeyTabSecretVersion`<sup>Required</sup> <a name="currentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion"></a>

```java
public java.lang.Number getCurrentKeyTabSecretVersion();
```

- *Type:* java.lang.Number

---

##### `isKerberosEnabled`<sup>Required</sup> <a name="isKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled"></a>

```java
public java.lang.Object getIsKerberosEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberosRealm`<sup>Required</sup> <a name="kerberosRealm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm"></a>

```java
public java.lang.String getKerberosRealm();
```

- *Type:* java.lang.String

---

##### `keyTabSecretId`<sup>Required</sup> <a name="keyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId"></a>

```java
public java.lang.String getKeyTabSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue"></a>

```java
public FileStorageMountTargetKerberos getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---


### FileStorageMountTargetLdapIdmapOutputReference <a name="FileStorageMountTargetLdapIdmapOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetLdapIdmapOutputReference;

new FileStorageMountTargetLdapIdmapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds">resetCacheLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds">resetCacheRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase">resetGroupSearchBase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds">resetNegativeCacheLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id">resetOutboundConnector1Id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id">resetOutboundConnector2Id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType">resetSchemaType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase">resetUserSearchBase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheLifetimeSeconds` <a name="resetCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds"></a>

```java
public void resetCacheLifetimeSeconds()
```

##### `resetCacheRefreshIntervalSeconds` <a name="resetCacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds"></a>

```java
public void resetCacheRefreshIntervalSeconds()
```

##### `resetGroupSearchBase` <a name="resetGroupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase"></a>

```java
public void resetGroupSearchBase()
```

##### `resetNegativeCacheLifetimeSeconds` <a name="resetNegativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds"></a>

```java
public void resetNegativeCacheLifetimeSeconds()
```

##### `resetOutboundConnector1Id` <a name="resetOutboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id"></a>

```java
public void resetOutboundConnector1Id()
```

##### `resetOutboundConnector2Id` <a name="resetOutboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id"></a>

```java
public void resetOutboundConnector2Id()
```

##### `resetSchemaType` <a name="resetSchemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType"></a>

```java
public void resetSchemaType()
```

##### `resetUserSearchBase` <a name="resetUserSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase"></a>

```java
public void resetUserSearchBase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput">cacheLifetimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput">cacheRefreshIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput">groupSearchBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput">negativeCacheLifetimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput">outboundConnector1IdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput">outboundConnector2IdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput">schemaTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput">userSearchBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds">cacheLifetimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds">cacheRefreshIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase">groupSearchBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds">negativeCacheLifetimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id">outboundConnector1Id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id">outboundConnector2Id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType">schemaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase">userSearchBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheLifetimeSecondsInput`<sup>Optional</sup> <a name="cacheLifetimeSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput"></a>

```java
public java.lang.Number getCacheLifetimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cacheRefreshIntervalSecondsInput`<sup>Optional</sup> <a name="cacheRefreshIntervalSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput"></a>

```java
public java.lang.Number getCacheRefreshIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `groupSearchBaseInput`<sup>Optional</sup> <a name="groupSearchBaseInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput"></a>

```java
public java.lang.String getGroupSearchBaseInput();
```

- *Type:* java.lang.String

---

##### `negativeCacheLifetimeSecondsInput`<sup>Optional</sup> <a name="negativeCacheLifetimeSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput"></a>

```java
public java.lang.Number getNegativeCacheLifetimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `outboundConnector1IdInput`<sup>Optional</sup> <a name="outboundConnector1IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput"></a>

```java
public java.lang.String getOutboundConnector1IdInput();
```

- *Type:* java.lang.String

---

##### `outboundConnector2IdInput`<sup>Optional</sup> <a name="outboundConnector2IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput"></a>

```java
public java.lang.String getOutboundConnector2IdInput();
```

- *Type:* java.lang.String

---

##### `schemaTypeInput`<sup>Optional</sup> <a name="schemaTypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput"></a>

```java
public java.lang.String getSchemaTypeInput();
```

- *Type:* java.lang.String

---

##### `userSearchBaseInput`<sup>Optional</sup> <a name="userSearchBaseInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput"></a>

```java
public java.lang.String getUserSearchBaseInput();
```

- *Type:* java.lang.String

---

##### `cacheLifetimeSeconds`<sup>Required</sup> <a name="cacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds"></a>

```java
public java.lang.Number getCacheLifetimeSeconds();
```

- *Type:* java.lang.Number

---

##### `cacheRefreshIntervalSeconds`<sup>Required</sup> <a name="cacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds"></a>

```java
public java.lang.Number getCacheRefreshIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `groupSearchBase`<sup>Required</sup> <a name="groupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase"></a>

```java
public java.lang.String getGroupSearchBase();
```

- *Type:* java.lang.String

---

##### `negativeCacheLifetimeSeconds`<sup>Required</sup> <a name="negativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds"></a>

```java
public java.lang.Number getNegativeCacheLifetimeSeconds();
```

- *Type:* java.lang.Number

---

##### `outboundConnector1Id`<sup>Required</sup> <a name="outboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id"></a>

```java
public java.lang.String getOutboundConnector1Id();
```

- *Type:* java.lang.String

---

##### `outboundConnector2Id`<sup>Required</sup> <a name="outboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id"></a>

```java
public java.lang.String getOutboundConnector2Id();
```

- *Type:* java.lang.String

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType"></a>

```java
public java.lang.String getSchemaType();
```

- *Type:* java.lang.String

---

##### `userSearchBase`<sup>Required</sup> <a name="userSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase"></a>

```java
public java.lang.String getUserSearchBase();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue"></a>

```java
public FileStorageMountTargetLdapIdmap getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---


### FileStorageMountTargetLocksList <a name="FileStorageMountTargetLocksList" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetLocksList;

new FileStorageMountTargetLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get"></a>

```java
public FileStorageMountTargetLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>>

---


### FileStorageMountTargetLocksOutputReference <a name="FileStorageMountTargetLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetLocksOutputReference;

new FileStorageMountTargetLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId"></a>

```java
public void resetRelatedResourceId()
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated"></a>

```java
public void resetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput"></a>

```java
public java.lang.String getRelatedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput"></a>

```java
public java.lang.String getTimeCreatedInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>

---


### FileStorageMountTargetTimeoutsOutputReference <a name="FileStorageMountTargetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_mount_target.FileStorageMountTargetTimeoutsOutputReference;

new FileStorageMountTargetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

---



