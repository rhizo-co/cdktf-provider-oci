# `dataOciLogAnalyticsLogAnalyticsObjectCollectionRules` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsObjectCollectionRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRules <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules oci_log_analytics_log_analytics_object_collection_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsObjectCollectionRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsObjectCollectionRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsObjectCollectionRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.logAnalyticsObjectCollectionRuleCollection">logAnalyticsObjectCollectionRuleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filter"></a>

```typescript
public readonly filter: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList</a>

---

##### `logAnalyticsObjectCollectionRuleCollection`<sup>Required</sup> <a name="logAnalyticsObjectCollectionRuleCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.logAnalyticsObjectCollectionRuleCollection"></a>

```typescript
public readonly logAnalyticsObjectCollectionRuleCollection: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig: dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#compartment_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#state DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#compartment_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#filter DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#state DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#state}.

---

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter: dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#values DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#regex DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#values DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#regex DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#regex}.

---

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection: dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection = { ... }
```


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems: dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems = { ... }
```


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides: dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>[]

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.charEncoding">charEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.collectionType">collectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isForceHistoricCollection">isForceHistoricCollection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSet">logSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetExtRegex">logSetExtRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetKey">logSetKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSourceName">logSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.objectNameFilters">objectNameFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osBucketName">osBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osNamespace">osNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.overrides">overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollSince">pollSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollTill">pollTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `charEncoding`<sup>Required</sup> <a name="charEncoding" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.charEncoding"></a>

```typescript
public readonly charEncoding: string;
```

- *Type:* string

---

##### `collectionType`<sup>Required</sup> <a name="collectionType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.collectionType"></a>

```typescript
public readonly collectionType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isForceHistoricCollection`<sup>Required</sup> <a name="isForceHistoricCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isForceHistoricCollection"></a>

```typescript
public readonly isForceHistoricCollection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logSet`<sup>Required</sup> <a name="logSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSet"></a>

```typescript
public readonly logSet: string;
```

- *Type:* string

---

##### `logSetExtRegex`<sup>Required</sup> <a name="logSetExtRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetExtRegex"></a>

```typescript
public readonly logSetExtRegex: string;
```

- *Type:* string

---

##### `logSetKey`<sup>Required</sup> <a name="logSetKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetKey"></a>

```typescript
public readonly logSetKey: string;
```

- *Type:* string

---

##### `logSourceName`<sup>Required</sup> <a name="logSourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSourceName"></a>

```typescript
public readonly logSourceName: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `objectNameFilters`<sup>Required</sup> <a name="objectNameFilters" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.objectNameFilters"></a>

```typescript
public readonly objectNameFilters: string[];
```

- *Type:* string[]

---

##### `osBucketName`<sup>Required</sup> <a name="osBucketName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osBucketName"></a>

```typescript
public readonly osBucketName: string;
```

- *Type:* string

---

##### `osNamespace`<sup>Required</sup> <a name="osNamespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osNamespace"></a>

```typescript
public readonly osNamespace: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList</a>

---

##### `pollSince`<sup>Required</sup> <a name="pollSince" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollSince"></a>

```typescript
public readonly pollSince: string;
```

- *Type:* string

---

##### `pollTill`<sup>Required</sup> <a name="pollTill" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollTill"></a>

```typescript
public readonly pollTill: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems</a>

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchValue">matchValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyName">propertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyValue">propertyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `matchValue`<sup>Required</sup> <a name="matchValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchValue"></a>

```typescript
public readonly matchValue: string;
```

- *Type:* string

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

---

##### `propertyValue`<sup>Required</sup> <a name="propertyValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyValue"></a>

```typescript
public readonly propertyValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides</a>

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsObjectCollectionRules } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection</a>

---



