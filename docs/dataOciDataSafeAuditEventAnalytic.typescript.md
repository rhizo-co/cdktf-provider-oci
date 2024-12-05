# `dataOciDataSafeAuditEventAnalytic` Submodule <a name="`dataOciDataSafeAuditEventAnalytic` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditEventAnalytic <a name="DataOciDataSafeAuditEventAnalytic" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic oci_data_safe_audit_event_analytic}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic(scope: Construct, id: string, config: DataOciDataSafeAuditEventAnalyticConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig">DataOciDataSafeAuditEventAnalyticConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig">DataOciDataSafeAuditEventAnalyticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetQueryTimeZone">resetQueryTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetScimQuery">resetScimQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetSummaryField">resetSummaryField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetTimeEnded">resetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetTimeStarted">resetTimeStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQueryTimeZone` <a name="resetQueryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetQueryTimeZone"></a>

```typescript
public resetQueryTimeZone(): void
```

##### `resetScimQuery` <a name="resetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetScimQuery"></a>

```typescript
public resetScimQuery(): void
```

##### `resetSummaryField` <a name="resetSummaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetSummaryField"></a>

```typescript
public resetSummaryField(): void
```

##### `resetTimeEnded` <a name="resetTimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetTimeEnded"></a>

```typescript
public resetTimeEnded(): void
```

##### `resetTimeStarted` <a name="resetTimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetTimeStarted"></a>

```typescript
public resetTimeStarted(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditEventAnalytic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isConstruct"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformElement"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeAuditEventAnalytic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditEventAnalytic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditEventAnalytic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditEventAnalytic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList">DataOciDataSafeAuditEventAnalyticItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.queryTimeZoneInput">queryTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.scimQueryInput">scimQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.summaryFieldInput">summaryFieldInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeEndedInput">timeEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeStartedInput">timeStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.queryTimeZone">queryTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.scimQuery">scimQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.summaryField">summaryField</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.items"></a>

```typescript
public readonly items: DataOciDataSafeAuditEventAnalyticItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList">DataOciDataSafeAuditEventAnalyticItemsList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `queryTimeZoneInput`<sup>Optional</sup> <a name="queryTimeZoneInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.queryTimeZoneInput"></a>

```typescript
public readonly queryTimeZoneInput: string;
```

- *Type:* string

---

##### `scimQueryInput`<sup>Optional</sup> <a name="scimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.scimQueryInput"></a>

```typescript
public readonly scimQueryInput: string;
```

- *Type:* string

---

##### `summaryFieldInput`<sup>Optional</sup> <a name="summaryFieldInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.summaryFieldInput"></a>

```typescript
public readonly summaryFieldInput: string[];
```

- *Type:* string[]

---

##### `timeEndedInput`<sup>Optional</sup> <a name="timeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeEndedInput"></a>

```typescript
public readonly timeEndedInput: string;
```

- *Type:* string

---

##### `timeStartedInput`<sup>Optional</sup> <a name="timeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeStartedInput"></a>

```typescript
public readonly timeStartedInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `queryTimeZone`<sup>Required</sup> <a name="queryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.queryTimeZone"></a>

```typescript
public readonly queryTimeZone: string;
```

- *Type:* string

---

##### `scimQuery`<sup>Required</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.scimQuery"></a>

```typescript
public readonly scimQuery: string;
```

- *Type:* string

---

##### `summaryField`<sup>Required</sup> <a name="summaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.summaryField"></a>

```typescript
public readonly summaryField: string[];
```

- *Type:* string[]

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditEventAnalyticConfig <a name="DataOciDataSafeAuditEventAnalyticConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.Initializer"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditEventAnalyticConfig: dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#compartment_id DataOciDataSafeAuditEventAnalytic#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#access_level DataOciDataSafeAuditEventAnalytic#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#compartment_id_in_subtree DataOciDataSafeAuditEventAnalytic#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.groupBy">groupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#group_by DataOciDataSafeAuditEventAnalytic#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#id DataOciDataSafeAuditEventAnalytic#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.queryTimeZone">queryTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#query_time_zone DataOciDataSafeAuditEventAnalytic#query_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.scimQuery">scimQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#scim_query DataOciDataSafeAuditEventAnalytic#scim_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.summaryField">summaryField</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#summary_field DataOciDataSafeAuditEventAnalytic#summary_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.timeEnded">timeEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#time_ended DataOciDataSafeAuditEventAnalytic#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.timeStarted">timeStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#time_started DataOciDataSafeAuditEventAnalytic#time_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#compartment_id DataOciDataSafeAuditEventAnalytic#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#access_level DataOciDataSafeAuditEventAnalytic#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#compartment_id_in_subtree DataOciDataSafeAuditEventAnalytic#compartment_id_in_subtree}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#group_by DataOciDataSafeAuditEventAnalytic#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#id DataOciDataSafeAuditEventAnalytic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryTimeZone`<sup>Optional</sup> <a name="queryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.queryTimeZone"></a>

```typescript
public readonly queryTimeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#query_time_zone DataOciDataSafeAuditEventAnalytic#query_time_zone}.

---

##### `scimQuery`<sup>Optional</sup> <a name="scimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.scimQuery"></a>

```typescript
public readonly scimQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#scim_query DataOciDataSafeAuditEventAnalytic#scim_query}.

---

##### `summaryField`<sup>Optional</sup> <a name="summaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.summaryField"></a>

```typescript
public readonly summaryField: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#summary_field DataOciDataSafeAuditEventAnalytic#summary_field}.

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#time_ended DataOciDataSafeAuditEventAnalytic#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#time_started DataOciDataSafeAuditEventAnalytic#time_started}.

---

### DataOciDataSafeAuditEventAnalyticItems <a name="DataOciDataSafeAuditEventAnalyticItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItems.Initializer"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditEventAnalyticItems: dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItems = { ... }
```


### DataOciDataSafeAuditEventAnalyticItemsDimensions <a name="DataOciDataSafeAuditEventAnalyticItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions.Initializer"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditEventAnalyticItemsDimensions: dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditEventAnalyticItemsDimensionsList <a name="DataOciDataSafeAuditEventAnalyticItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference <a name="DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.auditEventTime">auditEventTime</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.auditType">auditType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientHostname">clientHostname</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientId">clientId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientProgram">clientProgram</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.dbUserName">dbUserName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.eventName">eventName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.objectType">objectType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetClass">targetClass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetId">targetId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetName">targetName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions">DataOciDataSafeAuditEventAnalyticItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditEventTime`<sup>Required</sup> <a name="auditEventTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.auditEventTime"></a>

```typescript
public readonly auditEventTime: string[];
```

- *Type:* string[]

---

##### `auditType`<sup>Required</sup> <a name="auditType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.auditType"></a>

```typescript
public readonly auditType: string[];
```

- *Type:* string[]

---

##### `clientHostname`<sup>Required</sup> <a name="clientHostname" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientHostname"></a>

```typescript
public readonly clientHostname: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string[];
```

- *Type:* string[]

---

##### `clientProgram`<sup>Required</sup> <a name="clientProgram" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientProgram"></a>

```typescript
public readonly clientProgram: string[];
```

- *Type:* string[]

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.dbUserName"></a>

```typescript
public readonly dbUserName: string[];
```

- *Type:* string[]

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.eventName"></a>

```typescript
public readonly eventName: string[];
```

- *Type:* string[]

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string[];
```

- *Type:* string[]

---

##### `targetClass`<sup>Required</sup> <a name="targetClass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetClass"></a>

```typescript
public readonly targetClass: string[];
```

- *Type:* string[]

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string[];
```

- *Type:* string[]

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetName"></a>

```typescript
public readonly targetName: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditEventAnalyticItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions">DataOciDataSafeAuditEventAnalyticItemsDimensions</a>

---


### DataOciDataSafeAuditEventAnalyticItemsList <a name="DataOciDataSafeAuditEventAnalyticItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditEventAnalyticItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditEventAnalyticItemsOutputReference <a name="DataOciDataSafeAuditEventAnalyticItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditEventAnalytic } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.count">count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList">DataOciDataSafeAuditEventAnalyticItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItems">DataOciDataSafeAuditEventAnalyticItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.count"></a>

```typescript
public readonly count: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciDataSafeAuditEventAnalyticItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList">DataOciDataSafeAuditEventAnalyticItemsDimensionsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditEventAnalyticItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItems">DataOciDataSafeAuditEventAnalyticItems</a>

---



