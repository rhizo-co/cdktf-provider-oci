# `dataOciDataLabelingServiceDatasets` Submodule <a name="`dataOciDataLabelingServiceDatasets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceDatasets <a name="DataOciDataLabelingServiceDatasets" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets oci_data_labeling_service_datasets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasets;

DataOciDataLabelingServiceDatasets.Builder.create(Construct scope, java.lang.String id)
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
//  .annotationFormat(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataLabelingServiceDatasetsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.annotationFormat">annotationFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}.

---

##### `annotationFormat`<sup>Optional</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.annotationFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#filter DataOciDataLabelingServiceDatasets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetAnnotationFormat">resetAnnotationFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataLabelingServiceDatasetsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>>

---

##### `resetAnnotationFormat` <a name="resetAnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetAnnotationFormat"></a>

```java
public void resetAnnotationFormat()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceDatasets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasets;

DataOciDataLabelingServiceDatasets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasets;

DataOciDataLabelingServiceDatasets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasets;

DataOciDataLabelingServiceDatasets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasets;

DataOciDataLabelingServiceDatasets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataLabelingServiceDatasets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataLabelingServiceDatasets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataLabelingServiceDatasets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataLabelingServiceDatasets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceDatasets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.datasetCollection">datasetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList">DataOciDataLabelingServiceDatasetsDatasetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList">DataOciDataLabelingServiceDatasetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormatInput">annotationFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormat">annotationFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `datasetCollection`<sup>Required</sup> <a name="datasetCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.datasetCollection"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionList getDatasetCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList">DataOciDataLabelingServiceDatasetsDatasetCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filter"></a>

```java
public DataOciDataLabelingServiceDatasetsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList">DataOciDataLabelingServiceDatasetsFilterList</a>

---

##### `annotationFormatInput`<sup>Optional</sup> <a name="annotationFormatInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormatInput"></a>

```java
public java.lang.String getAnnotationFormatInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `annotationFormat`<sup>Required</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormat"></a>

```java
public java.lang.String getAnnotationFormat();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceDatasetsConfig <a name="DataOciDataLabelingServiceDatasetsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsConfig;

DataOciDataLabelingServiceDatasetsConfig.builder()
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
//  .annotationFormat(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataLabelingServiceDatasetsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.annotationFormat">annotationFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}.

---

##### `annotationFormat`<sup>Optional</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.annotationFormat"></a>

```java
public java.lang.String getAnnotationFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#filter DataOciDataLabelingServiceDatasets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}.

---

### DataOciDataLabelingServiceDatasetsDatasetCollection <a name="DataOciDataLabelingServiceDatasetsDatasetCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollection;

DataOciDataLabelingServiceDatasetsDatasetCollection.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItems <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems;

DataOciDataLabelingServiceDatasetsDatasetCollectionItems.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails;

DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata;

DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails;

DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration;

DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat;

DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath;

DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration;

DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet;

DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems;

DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems.builder()
    .build();
```


### DataOciDataLabelingServiceDatasetsFilter <a name="DataOciDataLabelingServiceDatasetsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsFilter;

DataOciDataLabelingServiceDatasetsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#name DataOciDataLabelingServiceDatasets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#values DataOciDataLabelingServiceDatasets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#regex DataOciDataLabelingServiceDatasets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#name DataOciDataLabelingServiceDatasets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#values DataOciDataLabelingServiceDatasets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#regex DataOciDataLabelingServiceDatasets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.formatType">formatType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.textFileTypeMetadata">textFileTypeMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

---

##### `textFileTypeMetadata`<sup>Required</sup> <a name="textFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.textFileTypeMetadata"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList getTextFileTypeMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter">columnDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex">columnIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter">escapeCharacter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType">formatType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter">lineDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnDelimiter`<sup>Required</sup> <a name="columnDelimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter"></a>

```java
public java.lang.String getColumnDelimiter();
```

- *Type:* java.lang.String

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex"></a>

```java
public java.lang.Number getColumnIndex();
```

- *Type:* java.lang.Number

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `escapeCharacter`<sup>Required</sup> <a name="escapeCharacter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter"></a>

```java
public java.lang.String getEscapeCharacter();
```

- *Type:* java.lang.String

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

---

##### `lineDelimiter`<sup>Required</sup> <a name="lineDelimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter"></a>

```java
public java.lang.String getLineDelimiter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importFormat">importFormat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importMetadataPath">importMetadataPath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `importFormat`<sup>Required</sup> <a name="importFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importFormat"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList getImportFormat();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList</a>

---

##### `importMetadataPath`<sup>Required</sup> <a name="importMetadataPath" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importMetadataPath"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList getImportMetadataPath();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.items"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.annotationFormat">annotationFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetFormatDetails">datasetFormatDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetSourceDetails">datasetSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialImportDatasetConfiguration">initialImportDatasetConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialRecordGenerationConfiguration">initialRecordGenerationConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelingInstructions">labelingInstructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelSet">labelSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleSubstate">lifecycleSubstate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.additionalProperties"></a>

```java
public StringMap getAdditionalProperties();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `annotationFormat`<sup>Required</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.annotationFormat"></a>

```java
public java.lang.String getAnnotationFormat();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `datasetFormatDetails`<sup>Required</sup> <a name="datasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetFormatDetails"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList getDatasetFormatDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList</a>

---

##### `datasetSourceDetails`<sup>Required</sup> <a name="datasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetSourceDetails"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList getDatasetSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialImportDatasetConfiguration`<sup>Required</sup> <a name="initialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialImportDatasetConfiguration"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList getInitialImportDatasetConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList</a>

---

##### `initialRecordGenerationConfiguration`<sup>Required</sup> <a name="initialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialRecordGenerationConfiguration"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList getInitialRecordGenerationConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList</a>

---

##### `labelingInstructions`<sup>Required</sup> <a name="labelingInstructions" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelingInstructions"></a>

```java
public java.lang.String getLabelingInstructions();
```

- *Type:* java.lang.String

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelSet"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList getLabelSet();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `lifecycleSubstate`<sup>Required</sup> <a name="lifecycleSubstate" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleSubstate"></a>

```java
public java.lang.String getLifecycleSubstate();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItems</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList;

new DataOciDataLabelingServiceDatasetsDatasetCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference;

new DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection">DataOciDataLabelingServiceDatasetsDatasetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.items"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataLabelingServiceDatasetsDatasetCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection">DataOciDataLabelingServiceDatasetsDatasetCollection</a>

---


### DataOciDataLabelingServiceDatasetsFilterList <a name="DataOciDataLabelingServiceDatasetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsFilterList;

new DataOciDataLabelingServiceDatasetsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get"></a>

```java
public DataOciDataLabelingServiceDatasetsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>>

---


### DataOciDataLabelingServiceDatasetsFilterOutputReference <a name="DataOciDataLabelingServiceDatasetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_labeling_service_datasets.DataOciDataLabelingServiceDatasetsFilterOutputReference;

new DataOciDataLabelingServiceDatasetsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter">DataOciDataLabelingServiceDatasetsFilter</a>

---



