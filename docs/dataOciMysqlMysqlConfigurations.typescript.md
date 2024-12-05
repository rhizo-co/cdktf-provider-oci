# `dataOciMysqlMysqlConfigurations` Submodule <a name="`dataOciMysqlMysqlConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlConfigurations <a name="DataOciMysqlMysqlConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations oci_mysql_mysql_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations(scope: Construct, id: string, config: DataOciMysqlMysqlConfigurationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig">DataOciMysqlMysqlConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig">DataOciMysqlMysqlConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName">resetShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMysqlMysqlConfigurationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>[]

---

##### `resetConfigurationId` <a name="resetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId"></a>

```typescript
public resetConfigurationId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetShapeName` <a name="resetShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName"></a>

```typescript
public resetShapeName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState"></a>

```typescript
public resetState(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMysqlMysqlConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMysqlMysqlConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput">shapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput">typeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type">type</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations"></a>

```typescript
public readonly configurations: DataOciMysqlMysqlConfigurationsConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter"></a>

```typescript
public readonly filter: DataOciMysqlMysqlConfigurationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMysqlMysqlConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput"></a>

```typescript
public readonly shapeNameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput"></a>

```typescript
public readonly typeInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlConfigurationsConfig <a name="DataOciMysqlMysqlConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlConfigurationsConfig: dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName">shapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type">type</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMysqlMysqlConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#filter DataOciMysqlMysqlConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shapeName`<sup>Optional</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}.

---

### DataOciMysqlMysqlConfigurationsConfigurations <a name="DataOciMysqlMysqlConfigurationsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlConfigurationsConfigurations: dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations = { ... }
```


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlConfigurationsConfigurationsInitVariables: dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables = { ... }
```


### DataOciMysqlMysqlConfigurationsConfigurationsVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlConfigurationsConfigurationsVariables: dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables = { ... }
```


### DataOciMysqlMysqlConfigurationsFilter <a name="DataOciMysqlMysqlConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlConfigurationsFilter: dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lowerCaseTableNames`<sup>Required</sup> <a name="lowerCaseTableNames" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```typescript
public readonly lowerCaseTableNames: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlConfigurationsConfigurationsInitVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsList <a name="DataOciMysqlMysqlConfigurationsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlConfigurationsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationsConfigurationsOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables">initVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId">parentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initVariables`<sup>Required</sup> <a name="initVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables"></a>

```typescript
public readonly initVariables: DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a>

---

##### `parentConfigurationId`<sup>Required</sup> <a name="parentConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId"></a>

```typescript
public readonly parentConfigurationId: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables"></a>

```typescript
public readonly variables: DataOciMysqlMysqlConfigurationsConfigurationsVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlConfigurationsConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit">autocommit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables">bigTables</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds">binlogExpireLogsSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata">binlogRowMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions">binlogRowValueOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression">binlogTransactionCompression</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType">completionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize">connectionMemoryChunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit">connectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth">cteMaxRecursionDepth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin">defaultAuthenticationPlugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks">foreignKeyChecks</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength">generatedRandomPasswordLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit">globalConnectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking">globalConnectionMemoryTracking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency">groupReplicationConsistency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct">innodbBufferPoolDumpPct</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances">innodbBufferPoolInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize">innodbBufferPoolSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize">innodbDdlBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads">innodbDdlThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword">innodbFtEnableStopword</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize">innodbFtMaxTokenSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize">innodbFtNumWordOptimize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit">innodbFtResultCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads">innodbLogWriterThreads</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag">innodbMaxPurgeLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay">innodbMaxPurgeLagDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages">innodbStatsPersistentSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages">innodbStatsTransientSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout">interactiveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile">localInfile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles">mandatoryRoles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize">maxBinlogCacheSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors">maxConnectErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime">maxExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount">maxPreparedStmtCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode">mysqlFirewallMode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout">mysqlxConnectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">mysqlxDeflateDefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">mysqlxDeflateMaxClientCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">mysqlxDocumentIdUniquePrefix</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice">mysqlxEnableHelloNotice</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">mysqlxIdleWorkerThreadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout">mysqlxInteractiveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">mysqlxLz4DefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">mysqlxLz4MaxClientCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket">mysqlxMaxAllowedPacket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads">mysqlxMinWorkerThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout">mysqlxReadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout">mysqlxWaitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout">mysqlxWriteTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">mysqlxZstdDefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">mysqlxZstdMaxClientCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">mysqlZstdDefaultCompressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout">netReadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout">netWriteTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize">parserMaxMemSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize">queryAllocBlockSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize">queryPreallocSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit">regexpTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize">sortBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode">sqlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings">sqlWarnings</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners">threadPoolDedicatedListeners</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit">threadPoolMaxTransactionsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize">tmpTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation">transactionIsolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout">waitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit"></a>

```typescript
public readonly autocommit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bigTables`<sup>Required</sup> <a name="bigTables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables"></a>

```typescript
public readonly bigTables: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `binlogExpireLogsSeconds`<sup>Required</sup> <a name="binlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```typescript
public readonly binlogExpireLogsSeconds: number;
```

- *Type:* number

---

##### `binlogRowMetadata`<sup>Required</sup> <a name="binlogRowMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata"></a>

```typescript
public readonly binlogRowMetadata: string;
```

- *Type:* string

---

##### `binlogRowValueOptions`<sup>Required</sup> <a name="binlogRowValueOptions" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions"></a>

```typescript
public readonly binlogRowValueOptions: string;
```

- *Type:* string

---

##### `binlogTransactionCompression`<sup>Required</sup> <a name="binlogTransactionCompression" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression"></a>

```typescript
public readonly binlogTransactionCompression: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `completionType`<sup>Required</sup> <a name="completionType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType"></a>

```typescript
public readonly completionType: string;
```

- *Type:* string

---

##### `connectionMemoryChunkSize`<sup>Required</sup> <a name="connectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```typescript
public readonly connectionMemoryChunkSize: number;
```

- *Type:* number

---

##### `connectionMemoryLimit`<sup>Required</sup> <a name="connectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit"></a>

```typescript
public readonly connectionMemoryLimit: string;
```

- *Type:* string

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

---

##### `cteMaxRecursionDepth`<sup>Required</sup> <a name="cteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```typescript
public readonly cteMaxRecursionDepth: string;
```

- *Type:* string

---

##### `defaultAuthenticationPlugin`<sup>Required</sup> <a name="defaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```typescript
public readonly defaultAuthenticationPlugin: string;
```

- *Type:* string

---

##### `foreignKeyChecks`<sup>Required</sup> <a name="foreignKeyChecks" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks"></a>

```typescript
public readonly foreignKeyChecks: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `generatedRandomPasswordLength`<sup>Required</sup> <a name="generatedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```typescript
public readonly generatedRandomPasswordLength: number;
```

- *Type:* number

---

##### `globalConnectionMemoryLimit`<sup>Required</sup> <a name="globalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```typescript
public readonly globalConnectionMemoryLimit: string;
```

- *Type:* string

---

##### `globalConnectionMemoryTracking`<sup>Required</sup> <a name="globalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```typescript
public readonly globalConnectionMemoryTracking: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `groupReplicationConsistency`<sup>Required</sup> <a name="groupReplicationConsistency" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency"></a>

```typescript
public readonly groupReplicationConsistency: string;
```

- *Type:* string

---

##### `informationSchemaStatsExpiry`<sup>Required</sup> <a name="informationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```typescript
public readonly informationSchemaStatsExpiry: number;
```

- *Type:* number

---

##### `innodbBufferPoolDumpPct`<sup>Required</sup> <a name="innodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```typescript
public readonly innodbBufferPoolDumpPct: number;
```

- *Type:* number

---

##### `innodbBufferPoolInstances`<sup>Required</sup> <a name="innodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```typescript
public readonly innodbBufferPoolInstances: number;
```

- *Type:* number

---

##### `innodbBufferPoolSize`<sup>Required</sup> <a name="innodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize"></a>

```typescript
public readonly innodbBufferPoolSize: string;
```

- *Type:* string

---

##### `innodbDdlBufferSize`<sup>Required</sup> <a name="innodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize"></a>

```typescript
public readonly innodbDdlBufferSize: string;
```

- *Type:* string

---

##### `innodbDdlThreads`<sup>Required</sup> <a name="innodbDdlThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads"></a>

```typescript
public readonly innodbDdlThreads: number;
```

- *Type:* number

---

##### `innodbFtEnableStopword`<sup>Required</sup> <a name="innodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword"></a>

```typescript
public readonly innodbFtEnableStopword: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `innodbFtMaxTokenSize`<sup>Required</sup> <a name="innodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```typescript
public readonly innodbFtMaxTokenSize: number;
```

- *Type:* number

---

##### `innodbFtMinTokenSize`<sup>Required</sup> <a name="innodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```typescript
public readonly innodbFtMinTokenSize: number;
```

- *Type:* number

---

##### `innodbFtNumWordOptimize`<sup>Required</sup> <a name="innodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```typescript
public readonly innodbFtNumWordOptimize: number;
```

- *Type:* number

---

##### `innodbFtResultCacheLimit`<sup>Required</sup> <a name="innodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```typescript
public readonly innodbFtResultCacheLimit: string;
```

- *Type:* string

---

##### `innodbFtServerStopwordTable`<sup>Required</sup> <a name="innodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```typescript
public readonly innodbFtServerStopwordTable: string;
```

- *Type:* string

---

##### `innodbLockWaitTimeout`<sup>Required</sup> <a name="innodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```typescript
public readonly innodbLockWaitTimeout: number;
```

- *Type:* number

---

##### `innodbLogWriterThreads`<sup>Required</sup> <a name="innodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads"></a>

```typescript
public readonly innodbLogWriterThreads: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `innodbMaxPurgeLag`<sup>Required</sup> <a name="innodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```typescript
public readonly innodbMaxPurgeLag: string;
```

- *Type:* string

---

##### `innodbMaxPurgeLagDelay`<sup>Required</sup> <a name="innodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```typescript
public readonly innodbMaxPurgeLagDelay: number;
```

- *Type:* number

---

##### `innodbStatsPersistentSamplePages`<sup>Required</sup> <a name="innodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```typescript
public readonly innodbStatsPersistentSamplePages: string;
```

- *Type:* string

---

##### `innodbStatsTransientSamplePages`<sup>Required</sup> <a name="innodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```typescript
public readonly innodbStatsTransientSamplePages: string;
```

- *Type:* string

---

##### `interactiveTimeout`<sup>Required</sup> <a name="interactiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout"></a>

```typescript
public readonly interactiveTimeout: number;
```

- *Type:* number

---

##### `localInfile`<sup>Required</sup> <a name="localInfile" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile"></a>

```typescript
public readonly localInfile: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mandatoryRoles`<sup>Required</sup> <a name="mandatoryRoles" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles"></a>

```typescript
public readonly mandatoryRoles: string;
```

- *Type:* string

---

##### `maxAllowedPacket`<sup>Required</sup> <a name="maxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket"></a>

```typescript
public readonly maxAllowedPacket: number;
```

- *Type:* number

---

##### `maxBinlogCacheSize`<sup>Required</sup> <a name="maxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize"></a>

```typescript
public readonly maxBinlogCacheSize: string;
```

- *Type:* string

---

##### `maxConnectErrors`<sup>Required</sup> <a name="maxConnectErrors" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors"></a>

```typescript
public readonly maxConnectErrors: string;
```

- *Type:* string

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxExecutionTime`<sup>Required</sup> <a name="maxExecutionTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime"></a>

```typescript
public readonly maxExecutionTime: string;
```

- *Type:* string

---

##### `maxHeapTableSize`<sup>Required</sup> <a name="maxHeapTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize"></a>

```typescript
public readonly maxHeapTableSize: string;
```

- *Type:* string

---

##### `maxPreparedStmtCount`<sup>Required</sup> <a name="maxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount"></a>

```typescript
public readonly maxPreparedStmtCount: number;
```

- *Type:* number

---

##### `mysqlFirewallMode`<sup>Required</sup> <a name="mysqlFirewallMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode"></a>

```typescript
public readonly mysqlFirewallMode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mysqlxConnectTimeout`<sup>Required</sup> <a name="mysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```typescript
public readonly mysqlxConnectTimeout: number;
```

- *Type:* number

---

##### `mysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```typescript
public readonly mysqlxDeflateDefaultCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxDeflateMaxClientCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="mysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```typescript
public readonly mysqlxDocumentIdUniquePrefix: number;
```

- *Type:* number

---

##### `mysqlxEnableHelloNotice`<sup>Required</sup> <a name="mysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```typescript
public readonly mysqlxEnableHelloNotice: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="mysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```typescript
public readonly mysqlxIdleWorkerThreadTimeout: number;
```

- *Type:* number

---

##### `mysqlxInteractiveTimeout`<sup>Required</sup> <a name="mysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```typescript
public readonly mysqlxInteractiveTimeout: number;
```

- *Type:* number

---

##### `mysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```typescript
public readonly mysqlxLz4DefaultCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxLz4MaxClientCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxMaxAllowedPacket`<sup>Required</sup> <a name="mysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```typescript
public readonly mysqlxMaxAllowedPacket: number;
```

- *Type:* number

---

##### `mysqlxMinWorkerThreads`<sup>Required</sup> <a name="mysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```typescript
public readonly mysqlxMinWorkerThreads: number;
```

- *Type:* number

---

##### `mysqlxReadTimeout`<sup>Required</sup> <a name="mysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout"></a>

```typescript
public readonly mysqlxReadTimeout: number;
```

- *Type:* number

---

##### `mysqlxWaitTimeout`<sup>Required</sup> <a name="mysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```typescript
public readonly mysqlxWaitTimeout: number;
```

- *Type:* number

---

##### `mysqlxWriteTimeout`<sup>Required</sup> <a name="mysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```typescript
public readonly mysqlxWriteTimeout: number;
```

- *Type:* number

---

##### `mysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```typescript
public readonly mysqlxZstdDefaultCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```typescript
public readonly mysqlxZstdMaxClientCompressionLevel: number;
```

- *Type:* number

---

##### `mysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```typescript
public readonly mysqlZstdDefaultCompressionLevel: number;
```

- *Type:* number

---

##### `netReadTimeout`<sup>Required</sup> <a name="netReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout"></a>

```typescript
public readonly netReadTimeout: number;
```

- *Type:* number

---

##### `netWriteTimeout`<sup>Required</sup> <a name="netWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout"></a>

```typescript
public readonly netWriteTimeout: number;
```

- *Type:* number

---

##### `parserMaxMemSize`<sup>Required</sup> <a name="parserMaxMemSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize"></a>

```typescript
public readonly parserMaxMemSize: string;
```

- *Type:* string

---

##### `queryAllocBlockSize`<sup>Required</sup> <a name="queryAllocBlockSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize"></a>

```typescript
public readonly queryAllocBlockSize: string;
```

- *Type:* string

---

##### `queryPreallocSize`<sup>Required</sup> <a name="queryPreallocSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize"></a>

```typescript
public readonly queryPreallocSize: string;
```

- *Type:* string

---

##### `regexpTimeLimit`<sup>Required</sup> <a name="regexpTimeLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit"></a>

```typescript
public readonly regexpTimeLimit: number;
```

- *Type:* number

---

##### `sortBufferSize`<sup>Required</sup> <a name="sortBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize"></a>

```typescript
public readonly sortBufferSize: string;
```

- *Type:* string

---

##### `sqlMode`<sup>Required</sup> <a name="sqlMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode"></a>

```typescript
public readonly sqlMode: string;
```

- *Type:* string

---

##### `sqlRequirePrimaryKey`<sup>Required</sup> <a name="sqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```typescript
public readonly sqlRequirePrimaryKey: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sqlWarnings`<sup>Required</sup> <a name="sqlWarnings" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings"></a>

```typescript
public readonly sqlWarnings: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `threadPoolDedicatedListeners`<sup>Required</sup> <a name="threadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```typescript
public readonly threadPoolDedicatedListeners: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `threadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="threadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```typescript
public readonly threadPoolMaxTransactionsLimit: number;
```

- *Type:* number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `tmpTableSize`<sup>Required</sup> <a name="tmpTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize"></a>

```typescript
public readonly tmpTableSize: string;
```

- *Type:* string

---

##### `transactionIsolation`<sup>Required</sup> <a name="transactionIsolation" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation"></a>

```typescript
public readonly transactionIsolation: string;
```

- *Type:* string

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout"></a>

```typescript
public readonly waitTimeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlConfigurationsConfigurationsVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a>

---


### DataOciMysqlMysqlConfigurationsFilterList <a name="DataOciMysqlMysqlConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMysqlMysqlConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>[]

---


### DataOciMysqlMysqlConfigurationsFilterOutputReference <a name="DataOciMysqlMysqlConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMysqlMysqlConfigurationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>

---



