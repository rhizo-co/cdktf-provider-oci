# `dataOciMysqlMysqlConfiguration` Submodule <a name="`dataOciMysqlMysqlConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlConfiguration <a name="DataOciMysqlMysqlConfiguration" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration oci_mysql_mysql_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration(scope: Construct, id: string, config: DataOciMysqlMysqlConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig">DataOciMysqlMysqlConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig">DataOciMysqlMysqlConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMysqlMysqlConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMysqlMysqlConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.initVariables">initVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList">DataOciMysqlMysqlConfigurationInitVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.parentConfigurationId">parentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList">DataOciMysqlMysqlConfigurationVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initVariables`<sup>Required</sup> <a name="initVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.initVariables"></a>

```typescript
public readonly initVariables: DataOciMysqlMysqlConfigurationInitVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList">DataOciMysqlMysqlConfigurationInitVariablesList</a>

---

##### `parentConfigurationId`<sup>Required</sup> <a name="parentConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.parentConfigurationId"></a>

```typescript
public readonly parentConfigurationId: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.variables"></a>

```typescript
public readonly variables: DataOciMysqlMysqlConfigurationVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList">DataOciMysqlMysqlConfigurationVariablesList</a>

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlConfigurationConfig <a name="DataOciMysqlMysqlConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlConfigurationConfig: dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#configuration_id DataOciMysqlMysqlConfiguration#configuration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#configuration_id DataOciMysqlMysqlConfiguration#configuration_id}.

---

### DataOciMysqlMysqlConfigurationInitVariables <a name="DataOciMysqlMysqlConfigurationInitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlConfigurationInitVariables: dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables = { ... }
```


### DataOciMysqlMysqlConfigurationVariables <a name="DataOciMysqlMysqlConfigurationVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlConfigurationVariables: dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlConfigurationInitVariablesList <a name="DataOciMysqlMysqlConfigurationInitVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlConfigurationInitVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationInitVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables">DataOciMysqlMysqlConfigurationInitVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lowerCaseTableNames`<sup>Required</sup> <a name="lowerCaseTableNames" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```typescript
public readonly lowerCaseTableNames: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlConfigurationInitVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables">DataOciMysqlMysqlConfigurationInitVariables</a>

---


### DataOciMysqlMysqlConfigurationVariablesList <a name="DataOciMysqlMysqlConfigurationVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlConfigurationVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.autocommit">autocommit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.bigTables">bigTables</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds">binlogExpireLogsSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata">binlogRowMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions">binlogRowValueOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression">binlogTransactionCompression</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.completionType">completionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize">connectionMemoryChunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit">connectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth">cteMaxRecursionDepth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin">defaultAuthenticationPlugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks">foreignKeyChecks</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength">generatedRandomPasswordLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit">globalConnectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking">globalConnectionMemoryTracking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency">groupReplicationConsistency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct">innodbBufferPoolDumpPct</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances">innodbBufferPoolInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize">innodbBufferPoolSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize">innodbDdlBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads">innodbDdlThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword">innodbFtEnableStopword</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize">innodbFtMaxTokenSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize">innodbFtNumWordOptimize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit">innodbFtResultCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads">innodbLogWriterThreads</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag">innodbMaxPurgeLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay">innodbMaxPurgeLagDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages">innodbStatsPersistentSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages">innodbStatsTransientSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout">interactiveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.localInfile">localInfile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles">mandatoryRoles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize">maxBinlogCacheSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors">maxConnectErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime">maxExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount">maxPreparedStmtCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode">mysqlFirewallMode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout">mysqlxConnectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">mysqlxDeflateDefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">mysqlxDeflateMaxClientCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">mysqlxDocumentIdUniquePrefix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice">mysqlxEnableHelloNotice</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">mysqlxIdleWorkerThreadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout">mysqlxInteractiveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">mysqlxLz4DefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">mysqlxLz4MaxClientCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket">mysqlxMaxAllowedPacket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads">mysqlxMinWorkerThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout">mysqlxReadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout">mysqlxWaitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout">mysqlxWriteTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">mysqlxZstdDefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">mysqlxZstdMaxClientCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">mysqlZstdDefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout">netReadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout">netWriteTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize">parserMaxMemSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize">queryAllocBlockSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize">queryPreallocSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit">regexpTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize">sortBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlMode">sqlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings">sqlWarnings</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners">threadPoolDedicatedListeners</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit">threadPoolMaxTransactionsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize">tmpTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation">transactionIsolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout">waitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables">DataOciMysqlMysqlConfigurationVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.autocommit"></a>

```typescript
public readonly autocommit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bigTables`<sup>Required</sup> <a name="bigTables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.bigTables"></a>

```typescript
public readonly bigTables: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `binlogExpireLogsSeconds`<sup>Required</sup> <a name="binlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```typescript
public readonly binlogExpireLogsSeconds: number;
```

- *Type:* number

---

##### `binlogRowMetadata`<sup>Required</sup> <a name="binlogRowMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata"></a>

```typescript
public readonly binlogRowMetadata: string;
```

- *Type:* string

---

##### `binlogRowValueOptions`<sup>Required</sup> <a name="binlogRowValueOptions" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions"></a>

```typescript
public readonly binlogRowValueOptions: string;
```

- *Type:* string

---

##### `binlogTransactionCompression`<sup>Required</sup> <a name="binlogTransactionCompression" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression"></a>

```typescript
public readonly binlogTransactionCompression: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `completionType`<sup>Required</sup> <a name="completionType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.completionType"></a>

```typescript
public readonly completionType: string;
```

- *Type:* string

---

##### `connectionMemoryChunkSize`<sup>Required</sup> <a name="connectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```typescript
public readonly connectionMemoryChunkSize: number;
```

- *Type:* number

---

##### `connectionMemoryLimit`<sup>Required</sup> <a name="connectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit"></a>

```typescript
public readonly connectionMemoryLimit: string;
```

- *Type:* string

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

---

##### `cteMaxRecursionDepth`<sup>Required</sup> <a name="cteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```typescript
public readonly cteMaxRecursionDepth: string;
```

- *Type:* string

---

##### `defaultAuthenticationPlugin`<sup>Required</sup> <a name="defaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```typescript
public readonly defaultAuthenticationPlugin: string;
```

- *Type:* string

---

##### `foreignKeyChecks`<sup>Required</sup> <a name="foreignKeyChecks" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks"></a>

```typescript
public readonly foreignKeyChecks: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `generatedRandomPasswordLength`<sup>Required</sup> <a name="generatedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```typescript
public readonly generatedRandomPasswordLength: number;
```

- *Type:* number

---

##### `globalConnectionMemoryLimit`<sup>Required</sup> <a name="globalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```typescript
public readonly globalConnectionMemoryLimit: string;
```

- *Type:* string

---

##### `globalConnectionMemoryTracking`<sup>Required</sup> <a name="globalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```typescript
public readonly globalConnectionMemoryTracking: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `groupReplicationConsistency`<sup>Required</sup> <a name="groupReplicationConsistency" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency"></a>

```typescript
public readonly groupReplicationConsistency: string;
```

- *Type:* string

---

##### `informationSchemaStatsExpiry`<sup>Required</sup> <a name="informationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```typescript
public readonly informationSchemaStatsExpiry: number;
```

- *Type:* number

---

##### `innodbBufferPoolDumpPct`<sup>Required</sup> <a name="innodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```typescript
public readonly innodbBufferPoolDumpPct: number;
```

- *Type:* number

---

##### `innodbBufferPoolInstances`<sup>Required</sup> <a name="innodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```typescript
public readonly innodbBufferPoolInstances: number;
```

- *Type:* number

---

##### `innodbBufferPoolSize`<sup>Required</sup> <a name="innodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize"></a>

```typescript
public readonly innodbBufferPoolSize: string;
```

- *Type:* string

---

##### `innodbDdlBufferSize`<sup>Required</sup> <a name="innodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize"></a>

```typescript
public readonly innodbDdlBufferSize: string;
```

- *Type:* string

---

##### `innodbDdlThreads`<sup>Required</sup> <a name="innodbDdlThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads"></a>

```typescript
public readonly innodbDdlThreads: number;
```

- *Type:* number

---

##### `innodbFtEnableStopword`<sup>Required</sup> <a name="innodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword"></a>

```typescript
public readonly innodbFtEnableStopword: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `innodbFtMaxTokenSize`<sup>Required</sup> <a name="innodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```typescript
public readonly innodbFtMaxTokenSize: number;
```

- *Type:* number

---

##### `innodbFtMinTokenSize`<sup>Required</sup> <a name="innodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```typescript
public readonly innodbFtMinTokenSize: number;
```

- *Type:* number

---

##### `innodbFtNumWordOptimize`<sup>Required</sup> <a name="innodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```typescript
public readonly innodbFtNumWordOptimize: number;
```

- *Type:* number

---

##### `innodbFtResultCacheLimit`<sup>Required</sup> <a name="innodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```typescript
public readonly innodbFtResultCacheLimit: string;
```

- *Type:* string

---

##### `innodbFtServerStopwordTable`<sup>Required</sup> <a name="innodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```typescript
public readonly innodbFtServerStopwordTable: string;
```

- *Type:* string

---

##### `innodbLockWaitTimeout`<sup>Required</sup> <a name="innodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```typescript
public readonly innodbLockWaitTimeout: number;
```

- *Type:* number

---

##### `innodbLogWriterThreads`<sup>Required</sup> <a name="innodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads"></a>

```typescript
public readonly innodbLogWriterThreads: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `innodbMaxPurgeLag`<sup>Required</sup> <a name="innodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```typescript
public readonly innodbMaxPurgeLag: string;
```

- *Type:* string

---

##### `innodbMaxPurgeLagDelay`<sup>Required</sup> <a name="innodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```typescript
public readonly innodbMaxPurgeLagDelay: number;
```

- *Type:* number

---

##### `innodbStatsPersistentSamplePages`<sup>Required</sup> <a name="innodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```typescript
public readonly innodbStatsPersistentSamplePages: string;
```

- *Type:* string

---

##### `innodbStatsTransientSamplePages`<sup>Required</sup> <a name="innodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```typescript
public readonly innodbStatsTransientSamplePages: string;
```

- *Type:* string

---

##### `interactiveTimeout`<sup>Required</sup> <a name="interactiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout"></a>

```typescript
public readonly interactiveTimeout: number;
```

- *Type:* number

---

##### `localInfile`<sup>Required</sup> <a name="localInfile" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.localInfile"></a>

```typescript
public readonly localInfile: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mandatoryRoles`<sup>Required</sup> <a name="mandatoryRoles" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles"></a>

```typescript
public readonly mandatoryRoles: string;
```

- *Type:* string

---

##### `maxAllowedPacket`<sup>Required</sup> <a name="maxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket"></a>

```typescript
public readonly maxAllowedPacket: number;
```

- *Type:* number

---

##### `maxBinlogCacheSize`<sup>Required</sup> <a name="maxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize"></a>

```typescript
public readonly maxBinlogCacheSize: string;
```

- *Type:* string

---

##### `maxConnectErrors`<sup>Required</sup> <a name="maxConnectErrors" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors"></a>

```typescript
public readonly maxConnectErrors: string;
```

- *Type:* string

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxExecutionTime`<sup>Required</sup> <a name="maxExecutionTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime"></a>

```typescript
public readonly maxExecutionTime: string;
```

- *Type:* string

---

##### `maxHeapTableSize`<sup>Required</sup> <a name="maxHeapTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize"></a>

```typescript
public readonly maxHeapTableSize: string;
```

- *Type:* string

---

##### `maxPreparedStmtCount`<sup>Required</sup> <a name="maxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount"></a>

```typescript
public readonly maxPreparedStmtCount: number;
```

- *Type:* number

---

##### `mysqlFirewallMode`<sup>Required</sup> <a name="mysqlFirewallMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode"></a>

```typescript
public readonly mysqlFirewallMode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mysqlxConnectTimeout`<sup>Required</sup> <a name="mysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```typescript
public readonly mysqlxConnectTimeout: number;
```

- *Type:* number

---

##### `mysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```typescript
public readonly mysqlxDeflateDefaultCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxDeflateMaxClientCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="mysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```typescript
public readonly mysqlxDocumentIdUniquePrefix: number;
```

- *Type:* number

---

##### `mysqlxEnableHelloNotice`<sup>Required</sup> <a name="mysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```typescript
public readonly mysqlxEnableHelloNotice: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="mysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```typescript
public readonly mysqlxIdleWorkerThreadTimeout: number;
```

- *Type:* number

---

##### `mysqlxInteractiveTimeout`<sup>Required</sup> <a name="mysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```typescript
public readonly mysqlxInteractiveTimeout: number;
```

- *Type:* number

---

##### `mysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```typescript
public readonly mysqlxLz4DefaultCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxLz4MaxClientCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxMaxAllowedPacket`<sup>Required</sup> <a name="mysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```typescript
public readonly mysqlxMaxAllowedPacket: number;
```

- *Type:* number

---

##### `mysqlxMinWorkerThreads`<sup>Required</sup> <a name="mysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```typescript
public readonly mysqlxMinWorkerThreads: number;
```

- *Type:* number

---

##### `mysqlxReadTimeout`<sup>Required</sup> <a name="mysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout"></a>

```typescript
public readonly mysqlxReadTimeout: number;
```

- *Type:* number

---

##### `mysqlxWaitTimeout`<sup>Required</sup> <a name="mysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```typescript
public readonly mysqlxWaitTimeout: number;
```

- *Type:* number

---

##### `mysqlxWriteTimeout`<sup>Required</sup> <a name="mysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```typescript
public readonly mysqlxWriteTimeout: number;
```

- *Type:* number

---

##### `mysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```typescript
public readonly mysqlxZstdDefaultCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxZstdMaxClientCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```typescript
public readonly mysqlZstdDefaultCompressionLevel: number;
```

- *Type:* number

---

##### `netReadTimeout`<sup>Required</sup> <a name="netReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout"></a>

```typescript
public readonly netReadTimeout: number;
```

- *Type:* number

---

##### `netWriteTimeout`<sup>Required</sup> <a name="netWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout"></a>

```typescript
public readonly netWriteTimeout: number;
```

- *Type:* number

---

##### `parserMaxMemSize`<sup>Required</sup> <a name="parserMaxMemSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize"></a>

```typescript
public readonly parserMaxMemSize: string;
```

- *Type:* string

---

##### `queryAllocBlockSize`<sup>Required</sup> <a name="queryAllocBlockSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize"></a>

```typescript
public readonly queryAllocBlockSize: string;
```

- *Type:* string

---

##### `queryPreallocSize`<sup>Required</sup> <a name="queryPreallocSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize"></a>

```typescript
public readonly queryPreallocSize: string;
```

- *Type:* string

---

##### `regexpTimeLimit`<sup>Required</sup> <a name="regexpTimeLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit"></a>

```typescript
public readonly regexpTimeLimit: number;
```

- *Type:* number

---

##### `sortBufferSize`<sup>Required</sup> <a name="sortBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize"></a>

```typescript
public readonly sortBufferSize: string;
```

- *Type:* string

---

##### `sqlMode`<sup>Required</sup> <a name="sqlMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlMode"></a>

```typescript
public readonly sqlMode: string;
```

- *Type:* string

---

##### `sqlRequirePrimaryKey`<sup>Required</sup> <a name="sqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```typescript
public readonly sqlRequirePrimaryKey: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sqlWarnings`<sup>Required</sup> <a name="sqlWarnings" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings"></a>

```typescript
public readonly sqlWarnings: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `threadPoolDedicatedListeners`<sup>Required</sup> <a name="threadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```typescript
public readonly threadPoolDedicatedListeners: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `threadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="threadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```typescript
public readonly threadPoolMaxTransactionsLimit: number;
```

- *Type:* number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `tmpTableSize`<sup>Required</sup> <a name="tmpTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize"></a>

```typescript
public readonly tmpTableSize: string;
```

- *Type:* string

---

##### `transactionIsolation`<sup>Required</sup> <a name="transactionIsolation" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation"></a>

```typescript
public readonly transactionIsolation: string;
```

- *Type:* string

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout"></a>

```typescript
public readonly waitTimeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlConfigurationVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables">DataOciMysqlMysqlConfigurationVariables</a>

---



