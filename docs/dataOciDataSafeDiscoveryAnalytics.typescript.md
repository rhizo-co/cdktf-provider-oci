# `dataOciDataSafeDiscoveryAnalytics` Submodule <a name="`dataOciDataSafeDiscoveryAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDiscoveryAnalytics <a name="DataOciDataSafeDiscoveryAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics oci_data_safe_discovery_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics(scope: Construct, id: string, config: DataOciDataSafeDiscoveryAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig">DataOciDataSafeDiscoveryAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig">DataOciDataSafeDiscoveryAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetIsCommon">resetIsCommon</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetSensitiveDataModelId">resetSensitiveDataModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetSensitiveTypeId">resetSensitiveTypeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeDiscoveryAnalyticsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter">DataOciDataSafeDiscoveryAnalyticsFilter</a>[]

---

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCommon` <a name="resetIsCommon" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetIsCommon"></a>

```typescript
public resetIsCommon(): void
```

##### `resetSensitiveDataModelId` <a name="resetSensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetSensitiveDataModelId"></a>

```typescript
public resetSensitiveDataModelId(): void
```

##### `resetSensitiveTypeId` <a name="resetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetSensitiveTypeId"></a>

```typescript
public resetSensitiveTypeId(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDiscoveryAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isConstruct"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformElement"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeDiscoveryAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeDiscoveryAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeDiscoveryAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDiscoveryAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.discoveryAnalyticsCollection">discoveryAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList">DataOciDataSafeDiscoveryAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter">DataOciDataSafeDiscoveryAnalyticsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.groupByInput">groupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.isCommonInput">isCommonInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveTypeIdInput">sensitiveTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.groupBy">groupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.isCommon">isCommon</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `discoveryAnalyticsCollection`<sup>Required</sup> <a name="discoveryAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.discoveryAnalyticsCollection"></a>

```typescript
public readonly discoveryAnalyticsCollection: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeDiscoveryAnalyticsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList">DataOciDataSafeDiscoveryAnalyticsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeDiscoveryAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter">DataOciDataSafeDiscoveryAnalyticsFilter</a>[]

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.groupByInput"></a>

```typescript
public readonly groupByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCommonInput`<sup>Optional</sup> <a name="isCommonInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.isCommonInput"></a>

```typescript
public readonly isCommonInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `sensitiveTypeIdInput`<sup>Optional</sup> <a name="sensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveTypeIdInput"></a>

```typescript
public readonly sensitiveTypeIdInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCommon`<sup>Required</sup> <a name="isCommon" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.isCommon"></a>

```typescript
public readonly isCommon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDiscoveryAnalyticsConfig <a name="DataOciDataSafeDiscoveryAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryAnalyticsConfig: dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id DataOciDataSafeDiscoveryAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id_in_subtree DataOciDataSafeDiscoveryAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter">DataOciDataSafeDiscoveryAnalyticsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.groupBy">groupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#group_by DataOciDataSafeDiscoveryAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#id DataOciDataSafeDiscoveryAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.isCommon">isCommon</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#is_common DataOciDataSafeDiscoveryAnalytics#is_common}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_data_model_id DataOciDataSafeDiscoveryAnalytics#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_type_id DataOciDataSafeDiscoveryAnalytics#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#target_id DataOciDataSafeDiscoveryAnalytics#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id DataOciDataSafeDiscoveryAnalytics#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#compartment_id_in_subtree DataOciDataSafeDiscoveryAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeDiscoveryAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter">DataOciDataSafeDiscoveryAnalyticsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#filter DataOciDataSafeDiscoveryAnalytics#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#group_by DataOciDataSafeDiscoveryAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#id DataOciDataSafeDiscoveryAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCommon`<sup>Optional</sup> <a name="isCommon" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.isCommon"></a>

```typescript
public readonly isCommon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#is_common DataOciDataSafeDiscoveryAnalytics#is_common}.

---

##### `sensitiveDataModelId`<sup>Optional</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_data_model_id DataOciDataSafeDiscoveryAnalytics#sensitive_data_model_id}.

---

##### `sensitiveTypeId`<sup>Optional</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#sensitive_type_id DataOciDataSafeDiscoveryAnalytics#sensitive_type_id}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#target_id DataOciDataSafeDiscoveryAnalytics#target_id}.

---

### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection: dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection = { ... }
```


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems: dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems = { ... }
```


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions: dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions = { ... }
```


### DataOciDataSafeDiscoveryAnalyticsFilter <a name="DataOciDataSafeDiscoveryAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryAnalyticsFilter: dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#name DataOciDataSafeDiscoveryAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#values DataOciDataSafeDiscoveryAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#regex DataOciDataSafeDiscoveryAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#name DataOciDataSafeDiscoveryAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#values DataOciDataSafeDiscoveryAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytics#regex DataOciDataSafeDiscoveryAnalytics#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.count">count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.count"></a>

```typescript
public readonly count: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsDimensionsList</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItems</a>

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference <a name="DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection">DataOciDataSafeDiscoveryAnalyticsDiscoveryAnalyticsCollection</a>

---


### DataOciDataSafeDiscoveryAnalyticsFilterList <a name="DataOciDataSafeDiscoveryAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDiscoveryAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter">DataOciDataSafeDiscoveryAnalyticsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeDiscoveryAnalyticsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter">DataOciDataSafeDiscoveryAnalyticsFilter</a>[]

---


### DataOciDataSafeDiscoveryAnalyticsFilterOutputReference <a name="DataOciDataSafeDiscoveryAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryAnalytics } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter">DataOciDataSafeDiscoveryAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeDiscoveryAnalyticsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytics.DataOciDataSafeDiscoveryAnalyticsFilter">DataOciDataSafeDiscoveryAnalyticsFilter</a>

---



