# `dataOciLogAnalyticsNamespacePropertiesMetadata` Submodule <a name="`dataOciLogAnalyticsNamespacePropertiesMetadata` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespacePropertiesMetadata <a name="DataOciLogAnalyticsNamespacePropertiesMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata oci_log_analytics_namespace_properties_metadata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata(scope: Construct, id: string, config: DataOciLogAnalyticsNamespacePropertiesMetadataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig">DataOciLogAnalyticsNamespacePropertiesMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig">DataOciLogAnalyticsNamespacePropertiesMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetConstraints">resetConstraints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetDisplayText">resetDisplayText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLogAnalyticsNamespacePropertiesMetadataFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter">DataOciLogAnalyticsNamespacePropertiesMetadataFilter</a>[]

---

##### `resetConstraints` <a name="resetConstraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetConstraints"></a>

```typescript
public resetConstraints(): void
```

##### `resetDisplayText` <a name="resetDisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetDisplayText"></a>

```typescript
public resetDisplayText(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLevel` <a name="resetLevel" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespacePropertiesMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespacePropertiesMetadata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespacePropertiesMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespacePropertiesMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespacePropertiesMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList">DataOciLogAnalyticsNamespacePropertiesMetadataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.propertyMetadataSummaryCollection">propertyMetadataSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraintsInput">constraintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayTextInput">displayTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter">DataOciLogAnalyticsNamespacePropertiesMetadataFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraints">constraints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayText">displayText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filter"></a>

```typescript
public readonly filter: DataOciLogAnalyticsNamespacePropertiesMetadataFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList">DataOciLogAnalyticsNamespacePropertiesMetadataFilterList</a>

---

##### `propertyMetadataSummaryCollection`<sup>Required</sup> <a name="propertyMetadataSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.propertyMetadataSummaryCollection"></a>

```typescript
public readonly propertyMetadataSummaryCollection: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList</a>

---

##### `constraintsInput`<sup>Optional</sup> <a name="constraintsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraintsInput"></a>

```typescript
public readonly constraintsInput: string;
```

- *Type:* string

---

##### `displayTextInput`<sup>Optional</sup> <a name="displayTextInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayTextInput"></a>

```typescript
public readonly displayTextInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLogAnalyticsNamespacePropertiesMetadataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter">DataOciLogAnalyticsNamespacePropertiesMetadataFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraints"></a>

```typescript
public readonly constraints: string;
```

- *Type:* string

---

##### `displayText`<sup>Required</sup> <a name="displayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayText"></a>

```typescript
public readonly displayText: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespacePropertiesMetadataConfig <a name="DataOciLogAnalyticsNamespacePropertiesMetadataConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespacePropertiesMetadataConfig: dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#namespace DataOciLogAnalyticsNamespacePropertiesMetadata#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.constraints">constraints</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#constraints DataOciLogAnalyticsNamespacePropertiesMetadata#constraints}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.displayText">displayText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#display_text DataOciLogAnalyticsNamespacePropertiesMetadata#display_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter">DataOciLogAnalyticsNamespacePropertiesMetadataFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#id DataOciLogAnalyticsNamespacePropertiesMetadata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.level">level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#level DataOciLogAnalyticsNamespacePropertiesMetadata#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#namespace DataOciLogAnalyticsNamespacePropertiesMetadata#namespace}.

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.constraints"></a>

```typescript
public readonly constraints: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#constraints DataOciLogAnalyticsNamespacePropertiesMetadata#constraints}.

---

##### `displayText`<sup>Optional</sup> <a name="displayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.displayText"></a>

```typescript
public readonly displayText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#display_text DataOciLogAnalyticsNamespacePropertiesMetadata#display_text}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLogAnalyticsNamespacePropertiesMetadataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter">DataOciLogAnalyticsNamespacePropertiesMetadataFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#filter DataOciLogAnalyticsNamespacePropertiesMetadata#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#id DataOciLogAnalyticsNamespacePropertiesMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#level DataOciLogAnalyticsNamespacePropertiesMetadata#level}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}.

---

### DataOciLogAnalyticsNamespacePropertiesMetadataFilter <a name="DataOciLogAnalyticsNamespacePropertiesMetadataFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespacePropertiesMetadataFilter: dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#values DataOciLogAnalyticsNamespacePropertiesMetadata#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#regex DataOciLogAnalyticsNamespacePropertiesMetadata#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#values DataOciLogAnalyticsNamespacePropertiesMetadata#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#regex DataOciLogAnalyticsNamespacePropertiesMetadata#regex}.

---

### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection: dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection = { ... }
```


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems: dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems = { ... }
```


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels: dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespacePropertiesMetadataFilterList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter">DataOciLogAnalyticsNamespacePropertiesMetadataFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsNamespacePropertiesMetadataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter">DataOciLogAnalyticsNamespacePropertiesMetadataFilter</a>[]

---


### DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter">DataOciLogAnalyticsNamespacePropertiesMetadataFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsNamespacePropertiesMetadataFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter">DataOciLogAnalyticsNamespacePropertiesMetadataFilter</a>

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.constraints">constraints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.constraints"></a>

```typescript
public readonly constraints: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels</a>

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.levels">levels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `levels`<sup>Required</sup> <a name="levels" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.levels"></a>

```typescript
public readonly levels: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems</a>

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespacePropertiesMetadata } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection</a>

---



