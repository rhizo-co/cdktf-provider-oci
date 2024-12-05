# `dataOciOpsiOpsiConfigurationConfigurationItem` Submodule <a name="`dataOciOpsiOpsiConfigurationConfigurationItem` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfigurationConfigurationItem <a name="DataOciOpsiOpsiConfigurationConfigurationItem" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item oci_opsi_opsi_configuration_configuration_item}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItem;

DataOciOpsiOpsiConfigurationConfigurationItem.Builder.create(Construct scope, java.lang.String id)
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
    .opsiConfigType(java.lang.String)
//  .compartmentId(java.lang.String)
//  .configItemField(java.util.List<java.lang.String>)
//  .configItemsApplicableContext(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.opsiConfigType">opsiConfigType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.configItemField">configItemField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.opsiConfigType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}.

---

##### `configItemField`<sup>Optional</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.configItemField"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}.

---

##### `configItemsApplicableContext`<sup>Optional</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.configItemsApplicableContext"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemField">resetConfigItemField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemsApplicableContext">resetConfigItemsApplicableContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetConfigItemField` <a name="resetConfigItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemField"></a>

```java
public void resetConfigItemField()
```

##### `resetConfigItemsApplicableContext` <a name="resetConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetConfigItemsApplicableContext"></a>

```java
public void resetConfigItemsApplicableContext()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfigurationConfigurationItem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItem;

DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItem;

DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItem;

DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItem;

DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfigurationConfigurationItem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOpsiOpsiConfigurationConfigurationItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOpsiOpsiConfigurationConfigurationItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfigurationConfigurationItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItems">configItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemFieldInput">configItemFieldInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContextInput">configItemsApplicableContextInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigTypeInput">opsiConfigTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemField">configItemField</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigType">opsiConfigType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `configItems`<sup>Required</sup> <a name="configItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItems"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList getConfigItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configItemFieldInput`<sup>Optional</sup> <a name="configItemFieldInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemFieldInput"></a>

```java
public java.util.List<java.lang.String> getConfigItemFieldInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemsApplicableContextInput`<sup>Optional</sup> <a name="configItemsApplicableContextInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContextInput"></a>

```java
public java.util.List<java.lang.String> getConfigItemsApplicableContextInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `opsiConfigTypeInput`<sup>Optional</sup> <a name="opsiConfigTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigTypeInput"></a>

```java
public java.lang.String getOpsiConfigTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configItemField`<sup>Required</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemField"></a>

```java
public java.util.List<java.lang.String> getConfigItemField();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemsApplicableContext`<sup>Required</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.configItemsApplicableContext"></a>

```java
public java.util.List<java.lang.String> getConfigItemsApplicableContext();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.opsiConfigType"></a>

```java
public java.lang.String getOpsiConfigType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationConfigurationItemConfig <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfig;

DataOciOpsiOpsiConfigurationConfigurationItemConfig.builder()
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
    .opsiConfigType(java.lang.String)
//  .compartmentId(java.lang.String)
//  .configItemField(java.util.List<java.lang.String>)
//  .configItemsApplicableContext(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.opsiConfigType">opsiConfigType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemField">configItemField</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemsApplicableContext">configItemsApplicableContext</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `opsiConfigType`<sup>Required</sup> <a name="opsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.opsiConfigType"></a>

```java
public java.lang.String getOpsiConfigType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}.

---

##### `configItemField`<sup>Optional</sup> <a name="configItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemField"></a>

```java
public java.util.List<java.lang.String> getConfigItemField();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}.

---

##### `configItemsApplicableContext`<sup>Optional</sup> <a name="configItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.configItemsApplicableContext"></a>

```java
public java.util.List<java.lang.String> getConfigItemsApplicableContext();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}.

---

### DataOciOpsiOpsiConfigurationConfigurationItemConfigItems <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems;

DataOciOpsiOpsiConfigurationConfigurationItemConfigItems.builder()
    .build();
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata;

DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata.builder()
    .build();
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails;

DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails.builder()
    .build();
```


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails;

DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.configItemType">configItemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.unitDetails">unitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.valueInputDetails">valueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.configItemType"></a>

```java
public java.lang.String getConfigItemType();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `unitDetails`<sup>Required</sup> <a name="unitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.unitDetails"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList getUnitDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList</a>

---

##### `valueInputDetails`<sup>Required</sup> <a name="valueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList getValueInputDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference.property.internalValue"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">allowedValueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">minValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">possibleValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValueType`<sup>Required</sup> <a name="allowedValueType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```java
public java.lang.String getAllowedValueType();
```

- *Type:* java.lang.String

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```java
public java.util.List<java.lang.String> getPossibleValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_opsi_configuration_configuration_item.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference;

new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.applicableContexts">applicableContexts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.configItemType">configItemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.valueSourceConfig">valueSourceConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems">DataOciOpsiOpsiConfigurationConfigurationItemConfigItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicableContexts`<sup>Required</sup> <a name="applicableContexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.applicableContexts"></a>

```java
public java.util.List<java.lang.String> getApplicableContexts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configItemType`<sup>Required</sup> <a name="configItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.configItemType"></a>

```java
public java.lang.String getConfigItemType();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.metadata"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList">DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueSourceConfig`<sup>Required</sup> <a name="valueSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.valueSourceConfig"></a>

```java
public java.lang.String getValueSourceConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference.property.internalValue"></a>

```java
public DataOciOpsiOpsiConfigurationConfigurationItemConfigItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurationConfigurationItem.DataOciOpsiOpsiConfigurationConfigurationItemConfigItems">DataOciOpsiOpsiConfigurationConfigurationItemConfigItems</a>

---



