# `databaseDatabaseSoftwareImage` Submodule <a name="`databaseDatabaseSoftwareImage` Submodule" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabaseSoftwareImage <a name="DatabaseDatabaseSoftwareImage" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image oci_database_database_software_image}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_database_software_image.DatabaseDatabaseSoftwareImage;

DatabaseDatabaseSoftwareImage.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
//  .databaseSoftwareImageOneOffPatches(java.util.List<java.lang.String>)
//  .databaseVersion(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .imageShapeFamily(java.lang.String)
//  .imageType(java.lang.String)
//  .lsInventory(java.lang.String)
//  .patchSet(java.lang.String)
//  .sourceDbHomeId(java.lang.String)
//  .timeouts(DatabaseDatabaseSoftwareImageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#compartment_id DatabaseDatabaseSoftwareImage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#display_name DatabaseDatabaseSoftwareImage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.databaseSoftwareImageOneOffPatches">databaseSoftwareImageOneOffPatches</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_software_image_one_off_patches DatabaseDatabaseSoftwareImage#database_software_image_one_off_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_version DatabaseDatabaseSoftwareImage#database_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#defined_tags DatabaseDatabaseSoftwareImage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#freeform_tags DatabaseDatabaseSoftwareImage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#id DatabaseDatabaseSoftwareImage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_shape_family DatabaseDatabaseSoftwareImage#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.imageType">imageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_type DatabaseDatabaseSoftwareImage#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.lsInventory">lsInventory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#ls_inventory DatabaseDatabaseSoftwareImage#ls_inventory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.patchSet">patchSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#patch_set DatabaseDatabaseSoftwareImage#patch_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.sourceDbHomeId">sourceDbHomeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#source_db_home_id DatabaseDatabaseSoftwareImage#source_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#compartment_id DatabaseDatabaseSoftwareImage#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#display_name DatabaseDatabaseSoftwareImage#display_name}.

---

##### `databaseSoftwareImageOneOffPatches`<sup>Optional</sup> <a name="databaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.databaseSoftwareImageOneOffPatches"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_software_image_one_off_patches DatabaseDatabaseSoftwareImage#database_software_image_one_off_patches}.

---

##### `databaseVersion`<sup>Optional</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.databaseVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_version DatabaseDatabaseSoftwareImage#database_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#defined_tags DatabaseDatabaseSoftwareImage#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#freeform_tags DatabaseDatabaseSoftwareImage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#id DatabaseDatabaseSoftwareImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageShapeFamily`<sup>Optional</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.imageShapeFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_shape_family DatabaseDatabaseSoftwareImage#image_shape_family}.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.imageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_type DatabaseDatabaseSoftwareImage#image_type}.

---

##### `lsInventory`<sup>Optional</sup> <a name="lsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.lsInventory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#ls_inventory DatabaseDatabaseSoftwareImage#ls_inventory}.

---

##### `patchSet`<sup>Optional</sup> <a name="patchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.patchSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#patch_set DatabaseDatabaseSoftwareImage#patch_set}.

---

##### `sourceDbHomeId`<sup>Optional</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.sourceDbHomeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#source_db_home_id DatabaseDatabaseSoftwareImage#source_db_home_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#timeouts DatabaseDatabaseSoftwareImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseSoftwareImageOneOffPatches">resetDatabaseSoftwareImageOneOffPatches</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseVersion">resetDatabaseVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageShapeFamily">resetImageShapeFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetLsInventory">resetLsInventory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetPatchSet">resetPatchSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetSourceDbHomeId">resetSourceDbHomeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.putTimeouts"></a>

```java
public void putTimeouts(DatabaseDatabaseSoftwareImageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

---

##### `resetDatabaseSoftwareImageOneOffPatches` <a name="resetDatabaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseSoftwareImageOneOffPatches"></a>

```java
public void resetDatabaseSoftwareImageOneOffPatches()
```

##### `resetDatabaseVersion` <a name="resetDatabaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseVersion"></a>

```java
public void resetDatabaseVersion()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetId"></a>

```java
public void resetId()
```

##### `resetImageShapeFamily` <a name="resetImageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageShapeFamily"></a>

```java
public void resetImageShapeFamily()
```

##### `resetImageType` <a name="resetImageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageType"></a>

```java
public void resetImageType()
```

##### `resetLsInventory` <a name="resetLsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetLsInventory"></a>

```java
public void resetLsInventory()
```

##### `resetPatchSet` <a name="resetPatchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetPatchSet"></a>

```java
public void resetPatchSet()
```

##### `resetSourceDbHomeId` <a name="resetSourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetSourceDbHomeId"></a>

```java
public void resetSourceDbHomeId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_database_software_image.DatabaseDatabaseSoftwareImage;

DatabaseDatabaseSoftwareImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_database_software_image.DatabaseDatabaseSoftwareImage;

DatabaseDatabaseSoftwareImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_database_software_image.DatabaseDatabaseSoftwareImage;

DatabaseDatabaseSoftwareImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_database_software_image.DatabaseDatabaseSoftwareImage;

DatabaseDatabaseSoftwareImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseDatabaseSoftwareImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseDatabaseSoftwareImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseDatabaseSoftwareImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDatabaseSoftwareImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIncludedPatches">databaseSoftwareImageIncludedPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.includedPatchesSummary">includedPatchesSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.isUpgradeSupported">isUpgradeSupported</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference">DatabaseDatabaseSoftwareImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatchesInput">databaseSoftwareImageOneOffPatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersionInput">databaseVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamilyInput">imageShapeFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageTypeInput">imageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventoryInput">lsInventoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSetInput">patchSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeIdInput">sourceDbHomeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatches">databaseSoftwareImageOneOffPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventory">lsInventory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSet">patchSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeId">sourceDbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseSoftwareImageIncludedPatches`<sup>Required</sup> <a name="databaseSoftwareImageIncludedPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIncludedPatches"></a>

```java
public java.util.List<java.lang.String> getDatabaseSoftwareImageIncludedPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedPatchesSummary`<sup>Required</sup> <a name="includedPatchesSummary" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.includedPatchesSummary"></a>

```java
public java.lang.String getIncludedPatchesSummary();
```

- *Type:* java.lang.String

---

##### `isUpgradeSupported`<sup>Required</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.isUpgradeSupported"></a>

```java
public IResolvable getIsUpgradeSupported();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeouts"></a>

```java
public DatabaseDatabaseSoftwareImageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference">DatabaseDatabaseSoftwareImageTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageOneOffPatchesInput`<sup>Optional</sup> <a name="databaseSoftwareImageOneOffPatchesInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatchesInput"></a>

```java
public java.util.List<java.lang.String> getDatabaseSoftwareImageOneOffPatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersionInput"></a>

```java
public java.lang.String getDatabaseVersionInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageShapeFamilyInput`<sup>Optional</sup> <a name="imageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamilyInput"></a>

```java
public java.lang.String getImageShapeFamilyInput();
```

- *Type:* java.lang.String

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageTypeInput"></a>

```java
public java.lang.String getImageTypeInput();
```

- *Type:* java.lang.String

---

##### `lsInventoryInput`<sup>Optional</sup> <a name="lsInventoryInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventoryInput"></a>

```java
public java.lang.String getLsInventoryInput();
```

- *Type:* java.lang.String

---

##### `patchSetInput`<sup>Optional</sup> <a name="patchSetInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSetInput"></a>

```java
public java.lang.String getPatchSetInput();
```

- *Type:* java.lang.String

---

##### `sourceDbHomeIdInput`<sup>Optional</sup> <a name="sourceDbHomeIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeIdInput"></a>

```java
public java.lang.String getSourceDbHomeIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageOneOffPatches`<sup>Required</sup> <a name="databaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatches"></a>

```java
public java.util.List<java.lang.String> getDatabaseSoftwareImageOneOffPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamily"></a>

```java
public java.lang.String getImageShapeFamily();
```

- *Type:* java.lang.String

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `lsInventory`<sup>Required</sup> <a name="lsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventory"></a>

```java
public java.lang.String getLsInventory();
```

- *Type:* java.lang.String

---

##### `patchSet`<sup>Required</sup> <a name="patchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSet"></a>

```java
public java.lang.String getPatchSet();
```

- *Type:* java.lang.String

---

##### `sourceDbHomeId`<sup>Required</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeId"></a>

```java
public java.lang.String getSourceDbHomeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseSoftwareImageConfig <a name="DatabaseDatabaseSoftwareImageConfig" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_database_software_image.DatabaseDatabaseSoftwareImageConfig;

DatabaseDatabaseSoftwareImageConfig.builder()
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
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
//  .databaseSoftwareImageOneOffPatches(java.util.List<java.lang.String>)
//  .databaseVersion(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .imageShapeFamily(java.lang.String)
//  .imageType(java.lang.String)
//  .lsInventory(java.lang.String)
//  .patchSet(java.lang.String)
//  .sourceDbHomeId(java.lang.String)
//  .timeouts(DatabaseDatabaseSoftwareImageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#compartment_id DatabaseDatabaseSoftwareImage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#display_name DatabaseDatabaseSoftwareImage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseSoftwareImageOneOffPatches">databaseSoftwareImageOneOffPatches</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_software_image_one_off_patches DatabaseDatabaseSoftwareImage#database_software_image_one_off_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_version DatabaseDatabaseSoftwareImage#database_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#defined_tags DatabaseDatabaseSoftwareImage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#freeform_tags DatabaseDatabaseSoftwareImage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#id DatabaseDatabaseSoftwareImage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_shape_family DatabaseDatabaseSoftwareImage#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageType">imageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_type DatabaseDatabaseSoftwareImage#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lsInventory">lsInventory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#ls_inventory DatabaseDatabaseSoftwareImage#ls_inventory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.patchSet">patchSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#patch_set DatabaseDatabaseSoftwareImage#patch_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.sourceDbHomeId">sourceDbHomeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#source_db_home_id DatabaseDatabaseSoftwareImage#source_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#compartment_id DatabaseDatabaseSoftwareImage#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#display_name DatabaseDatabaseSoftwareImage#display_name}.

---

##### `databaseSoftwareImageOneOffPatches`<sup>Optional</sup> <a name="databaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseSoftwareImageOneOffPatches"></a>

```java
public java.util.List<java.lang.String> getDatabaseSoftwareImageOneOffPatches();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_software_image_one_off_patches DatabaseDatabaseSoftwareImage#database_software_image_one_off_patches}.

---

##### `databaseVersion`<sup>Optional</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_version DatabaseDatabaseSoftwareImage#database_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#defined_tags DatabaseDatabaseSoftwareImage#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#freeform_tags DatabaseDatabaseSoftwareImage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#id DatabaseDatabaseSoftwareImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageShapeFamily`<sup>Optional</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageShapeFamily"></a>

```java
public java.lang.String getImageShapeFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_shape_family DatabaseDatabaseSoftwareImage#image_shape_family}.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_type DatabaseDatabaseSoftwareImage#image_type}.

---

##### `lsInventory`<sup>Optional</sup> <a name="lsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lsInventory"></a>

```java
public java.lang.String getLsInventory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#ls_inventory DatabaseDatabaseSoftwareImage#ls_inventory}.

---

##### `patchSet`<sup>Optional</sup> <a name="patchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.patchSet"></a>

```java
public java.lang.String getPatchSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#patch_set DatabaseDatabaseSoftwareImage#patch_set}.

---

##### `sourceDbHomeId`<sup>Optional</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.sourceDbHomeId"></a>

```java
public java.lang.String getSourceDbHomeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#source_db_home_id DatabaseDatabaseSoftwareImage#source_db_home_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.timeouts"></a>

```java
public DatabaseDatabaseSoftwareImageTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#timeouts DatabaseDatabaseSoftwareImage#timeouts}

---

### DatabaseDatabaseSoftwareImageTimeouts <a name="DatabaseDatabaseSoftwareImageTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_database_software_image.DatabaseDatabaseSoftwareImageTimeouts;

DatabaseDatabaseSoftwareImageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#create DatabaseDatabaseSoftwareImage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#delete DatabaseDatabaseSoftwareImage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#update DatabaseDatabaseSoftwareImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#create DatabaseDatabaseSoftwareImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#delete DatabaseDatabaseSoftwareImage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#update DatabaseDatabaseSoftwareImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDatabaseSoftwareImageTimeoutsOutputReference <a name="DatabaseDatabaseSoftwareImageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_database_software_image.DatabaseDatabaseSoftwareImageTimeoutsOutputReference;

new DatabaseDatabaseSoftwareImageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

---



