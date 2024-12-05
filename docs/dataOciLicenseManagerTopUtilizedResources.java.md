# `dataOciLicenseManagerTopUtilizedResources` Submodule <a name="`dataOciLicenseManagerTopUtilizedResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerTopUtilizedResources <a name="DataOciLicenseManagerTopUtilizedResources" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources oci_license_manager_top_utilized_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_top_utilized_resources.DataOciLicenseManagerTopUtilizedResources;

DataOciLicenseManagerTopUtilizedResources.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .isCompartmentIdInSubtree(java.lang.Boolean)
//  .isCompartmentIdInSubtree(IResolvable)
//  .resourceUnitType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.resourceUnitType">resourceUnitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCompartmentIdInSubtree`<sup>Optional</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.isCompartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}.

---

##### `resourceUnitType`<sup>Optional</sup> <a name="resourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.resourceUnitType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetIsCompartmentIdInSubtree">resetIsCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetResourceUnitType">resetResourceUnitType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetId"></a>

```java
public void resetId()
```

##### `resetIsCompartmentIdInSubtree` <a name="resetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetIsCompartmentIdInSubtree"></a>

```java
public void resetIsCompartmentIdInSubtree()
```

##### `resetResourceUnitType` <a name="resetResourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetResourceUnitType"></a>

```java
public void resetResourceUnitType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_top_utilized_resources.DataOciLicenseManagerTopUtilizedResources;

DataOciLicenseManagerTopUtilizedResources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_top_utilized_resources.DataOciLicenseManagerTopUtilizedResources;

DataOciLicenseManagerTopUtilizedResources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_top_utilized_resources.DataOciLicenseManagerTopUtilizedResources;

DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_top_utilized_resources.DataOciLicenseManagerTopUtilizedResources;

DataOciLicenseManagerTopUtilizedResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciLicenseManagerTopUtilizedResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciLicenseManagerTopUtilizedResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciLicenseManagerTopUtilizedResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerTopUtilizedResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList">DataOciLicenseManagerTopUtilizedResourcesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtreeInput">isCompartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitTypeInput">resourceUnitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitType">resourceUnitType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.items"></a>

```java
public DataOciLicenseManagerTopUtilizedResourcesItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList">DataOciLicenseManagerTopUtilizedResourcesItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="isCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getIsCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceUnitTypeInput`<sup>Optional</sup> <a name="resourceUnitTypeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitTypeInput"></a>

```java
public java.lang.String getResourceUnitTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isCompartmentIdInSubtree`<sup>Required</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtree"></a>

```java
public java.lang.Object getIsCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceUnitType`<sup>Required</sup> <a name="resourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitType"></a>

```java
public java.lang.String getResourceUnitType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerTopUtilizedResourcesConfig <a name="DataOciLicenseManagerTopUtilizedResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_top_utilized_resources.DataOciLicenseManagerTopUtilizedResourcesConfig;

DataOciLicenseManagerTopUtilizedResourcesConfig.builder()
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
//  .id(java.lang.String)
//  .isCompartmentIdInSubtree(java.lang.Boolean)
//  .isCompartmentIdInSubtree(IResolvable)
//  .resourceUnitType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.resourceUnitType">resourceUnitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCompartmentIdInSubtree`<sup>Optional</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.isCompartmentIdInSubtree"></a>

```java
public java.lang.Object getIsCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}.

---

##### `resourceUnitType`<sup>Optional</sup> <a name="resourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.resourceUnitType"></a>

```java
public java.lang.String getResourceUnitType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}.

---

### DataOciLicenseManagerTopUtilizedResourcesItems <a name="DataOciLicenseManagerTopUtilizedResourcesItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_top_utilized_resources.DataOciLicenseManagerTopUtilizedResourcesItems;

DataOciLicenseManagerTopUtilizedResourcesItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerTopUtilizedResourcesItemsList <a name="DataOciLicenseManagerTopUtilizedResourcesItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_top_utilized_resources.DataOciLicenseManagerTopUtilizedResourcesItemsList;

new DataOciLicenseManagerTopUtilizedResourcesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.get"></a>

```java
public DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference <a name="DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_license_manager_top_utilized_resources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference;

new DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentName">resourceCompartmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.totalUnits">totalUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.unitType">unitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems">DataOciLicenseManagerTopUtilizedResourcesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentId"></a>

```java
public java.lang.String getResourceCompartmentId();
```

- *Type:* java.lang.String

---

##### `resourceCompartmentName`<sup>Required</sup> <a name="resourceCompartmentName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentName"></a>

```java
public java.lang.String getResourceCompartmentName();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `totalUnits`<sup>Required</sup> <a name="totalUnits" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.totalUnits"></a>

```java
public java.lang.Number getTotalUnits();
```

- *Type:* java.lang.Number

---

##### `unitType`<sup>Required</sup> <a name="unitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.unitType"></a>

```java
public java.lang.String getUnitType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.internalValue"></a>

```java
public DataOciLicenseManagerTopUtilizedResourcesItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems">DataOciLicenseManagerTopUtilizedResourcesItems</a>

---



